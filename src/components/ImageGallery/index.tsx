import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink } from "react-feather";
import * as S from "./style";

type ImageGalleryProps = {
  images: string[];
  title: string;
};

export const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const hasMany = images.length > 1;

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  // setas do teclado trocam de tela enquanto a galeria está aberta
  useEffect(() => {
    if (!emblaApi || !hasMany) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") emblaApi.scrollPrev();
      if (event.key === "ArrowRight") emblaApi.scrollNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi, hasMany]);

  // com muitas telas as miniaturas não cabem: centraliza a da tela atual
  useEffect(() => {
    const container = thumbsRef.current;
    const thumb = container?.children[selectedIndex];
    if (!container || !thumb) return;

    const containerRect = container.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    container.scrollBy({
      left:
        thumbRect.left -
        containerRect.left -
        (containerRect.width - thumbRect.width) / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [selectedIndex]);

  return (
    <S.ImageGalleryContainer>
      <div className="gallery-stage">
        <div className="gallery-viewport" ref={emblaRef}>
          <div className="gallery-track">
            {images.map((image, index) => (
              <div
                key={`${index}-${image}`}
                className="gallery-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${images.length}`}
              >
                <img
                  src={image}
                  alt={`${title}, tela ${index + 1} de ${images.length}`}
                />
              </div>
            ))}
          </div>
        </div>

        {hasMany && (
          <>
            <button
              type="button"
              className="gallery-arrow prev"
              aria-label="Tela anterior"
              disabled={selectedIndex === 0}
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="gallery-arrow next"
              aria-label="Próxima tela"
              disabled={selectedIndex === images.length - 1}
              onClick={() => emblaApi?.scrollNext()}
            >
              <ChevronRight size={22} />
            </button>
            <span className="gallery-counter" aria-live="polite">
              {selectedIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {hasMany && (
        <div
          className="gallery-thumbs"
          role="group"
          aria-label="Telas"
          ref={thumbsRef}
        >
          {images.map((image, index) => (
            <button
              key={`${index}-${image}`}
              type="button"
              className={index === selectedIndex ? "is-active" : ""}
              aria-label={`Ver tela ${index + 1}`}
              aria-current={index === selectedIndex}
              onClick={() => emblaApi?.scrollTo(index)}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}

      <a
        className="gallery-original"
        href={images[selectedIndex]}
        target="_blank"
        rel="noreferrer"
      >
        <ExternalLink size={14} />
        Abrir imagem em tamanho original
      </a>
    </S.ImageGalleryContainer>
  );
};
