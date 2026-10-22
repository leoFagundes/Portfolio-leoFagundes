import { CSSProperties, useEffect, useRef, useState } from "react";
import { Pause, Play } from "react-feather";
import * as S from "./style";

type AudioPlayerProps = {
  src: string;
  title: string;
  subtitle?: string;
  onPlayingChange?: (isPlaying: boolean) => void;
};

const formatTime = (value: number) => {
  if (!Number.isFinite(value)) return "00:00";

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

export const AudioPlayer = ({
  src,
  title,
  subtitle,
  onPlayingChange,
}: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    onPlayingChange?.(isPlaying);
  }, [isPlaying, onPlayingChange]);

  // um <audio> removido da página pode continuar tocando: pausa ao sair
  useEffect(() => {
    const audio = audioRef.current;
    return () => audio?.pause();
  }, []);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = Number(event.target.value);
    setCurrentTime(audio.currentTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <S.AudioPlayerContainer className={isPlaying ? "is-playing" : ""}>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
      />

      <button
        type="button"
        className="player-toggle"
        aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        onClick={handleToggle}
      >
        {isPlaying ? (
          <Pause size={22} />
        ) : (
          <Play size={22} className="icon-play" />
        )}
      </button>

      <div className="player-info">
        <strong>{title}</strong>
        {subtitle && <span>{subtitle}</span>}
      </div>

      <div className="player-equalizer" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="player-progress">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={handleSeek}
          aria-label="Posição da música"
          style={{ "--progress": `${progress}%` } as CSSProperties}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </S.AudioPlayerContainer>
  );
};
