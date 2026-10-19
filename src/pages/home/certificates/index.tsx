import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, Award, Clock } from "react-feather";
import { certificateData } from "src/data/certificatesData";
import { CarouselControls } from "src/components/CarouselControls";

export const Certificates = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const total = certificateData.length;

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <S.CertificatesContainer>
      <Title>Certificados</Title>

      <div
        className="certificates-carousel"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Certificados"
      >
        <div className="certificates-viewport" ref={emblaRef}>
          <div className="certificates-track">
            {certificateData.map((certificate, index) => (
              <div
                key={certificate.link}
                className="certificates-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${total}`}
              >
                <a
                  className={`certificate-card ${
                    index === selectedIndex ? "is-selected" : ""
                  }`}
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="certificate-header">
                    <span className="certificate-icon">
                      <Award size={20} />
                    </span>
                    <span className="certificate-year">
                      {certificate.conclusion}
                    </span>
                  </div>

                  <div className="certificate-body">
                    <span className="certificate-institute">
                      {certificate.institute}
                    </span>
                    <T.H3 className="certificate-title">
                      {certificate.name}
                    </T.H3>
                  </div>

                  <div className="certificate-footer">
                    <span className="certificate-duration">
                      <Clock size={16} />
                      {certificate.duration} horas
                    </span>
                    <span className="certificate-link">
                      Ver certificado
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <CarouselControls
          currentIndex={selectedIndex}
          total={total}
          onPrev={() => emblaApi?.scrollPrev()}
          onNext={() => emblaApi?.scrollNext()}
          prevLabel="Certificado anterior"
          nextLabel="Próximo certificado"
        />
      </div>
    </S.CertificatesContainer>
  );
};
