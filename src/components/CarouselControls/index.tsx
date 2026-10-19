import { ArrowLeft, ArrowRight } from "react-feather";
import * as S from "./style";

type CarouselControlsProps = {
  currentIndex: number;
  total: number;
  onPrev: VoidFunction;
  onNext: VoidFunction;
  prevLabel: string;
  nextLabel: string;
};

const formatIndex = (value: number) => String(value).padStart(2, "0");

export const CarouselControls = ({
  currentIndex,
  total,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
}: CarouselControlsProps) => (
  <S.CarouselControlsContainer>
    <div className="carousel-progress">
      <div
        className="carousel-progress-bar"
        style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
      />
    </div>
    <span className="carousel-counter" aria-live="polite">
      <strong>{formatIndex(currentIndex + 1)}</strong> / {formatIndex(total)}
    </span>
    <div className="carousel-buttons">
      <button type="button" aria-label={prevLabel} onClick={onPrev}>
        <ArrowLeft size={20} />
      </button>
      <button type="button" aria-label={nextLabel} onClick={onNext}>
        <ArrowRight size={20} />
      </button>
    </div>
  </S.CarouselControlsContainer>
);
