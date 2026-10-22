import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import { AudioPlayer } from "src/components/AudioPlayer";
import * as T from "src/styled/typography";
import * as S from "./style";

const LOFI_SRC = `${process.env.PUBLIC_URL}/music/lofi.mp3`;

// mesmo desenho de branding/lf-logo.svg
const LF_PATH =
  "M0 0H24V216H168V240H0Z M48 120H216V144H72V208H48Z M48 248H72V360H48Z";

export const EasterEgg = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Pausa para o café · Leonardo Fagundes";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <S.EasterEggContainer>
      <div className="easter-content">
        <Link to="/" className="easter-back">
          <ArrowLeft size={16} />
          Voltar ao portfólio
        </Link>

        <header className="easter-header">
          <span className="easter-eyebrow">Easter egg encontrado</span>
          <T.H1>Pausa para o café</T.H1>
          <T.P1 className="easter-text">
            Sim, eu amo jogos de tabuleiro e enigmas.
          </T.P1>
        </header>

        <svg
          className={`coffee ${isMusicPlaying ? "is-playing" : ""}`}
          viewBox="0 0 200 200"
          role="img"
          aria-label="Xícara de café fumegante"
        >
          <defs>
            <linearGradient
              id="coffee-mug-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop stopColor="#056945" />
              <stop offset="0.5" stopColor="#01A66B" />
              <stop offset="1" stopColor="#056945" />
            </linearGradient>
            <radialGradient
              id="coffee-liquid-gradient"
              cx="0.5"
              cy="0.5"
              r="0.6"
            >
              <stop stopColor="#4A2E1C" />
              <stop offset="1" stopColor="#1F130B" />
            </radialGradient>
          </defs>

          <ellipse
            className="coffee-saucer"
            cx="100"
            cy="176"
            rx="72"
            ry="10"
          />

          <g className="coffee-mug">
            <path
              className="coffee-steam"
              d="M80 66 C70 54 90 46 80 34 C70 22 90 14 80 4"
            />
            <path
              className="coffee-steam steam-2"
              d="M100 64 C90 52 110 44 100 32 C90 20 110 12 100 2"
            />
            <path
              className="coffee-steam steam-3"
              d="M120 66 C110 54 130 46 120 34 C110 22 130 14 120 4"
            />

            <text className="coffee-note" x="150" y="64">
              ♪
            </text>
            <text className="coffee-note note-2" x="162" y="44">
              ♫
            </text>

            <path
              className="coffee-handle"
              d="M150 98 C176 98 176 138 150 138"
            />
            <path
              className="coffee-body"
              d="M50 80 H150 V140 Q150 168 122 168 H78 Q50 168 50 140 Z"
            />
            <ellipse className="coffee-rim" cx="100" cy="80" rx="50" ry="10" />
            <ellipse
              className="coffee-liquid"
              cx="100"
              cy="81"
              rx="44"
              ry="7"
            />
            <ellipse className="coffee-shine" cx="88" cy="80" rx="10" ry="2" />
            <path
              className="coffee-logo"
              transform="translate(87 102) scale(0.12)"
              d={LF_PATH}
            />
          </g>
        </svg>

        <T.H3 className="easter-curiosity">
          <span>Curiosidade sobre mim</span>
          Gosto de escutar lofi enquanto programo.
        </T.H3>

        <AudioPlayer
          src={LOFI_SRC}
          title="Lofi para programar"
          onPlayingChange={setIsMusicPlaying}
        />
      </div>
    </S.EasterEggContainer>
  );
};
