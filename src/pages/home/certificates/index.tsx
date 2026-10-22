import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Award, Clock, Eye, Grid, Star } from "react-feather";
import { certificateData } from "src/data/certificatesData";
import { CarouselControls } from "src/components/CarouselControls";
import {
  SegmentedControl,
  SegmentedOption,
} from "src/components/SegmentedControl";
import { DocumentFile, DocumentModal } from "src/components/DocumentModal";
import { CertificateProps } from "src/types/type";

type CertificatesMode = "relevant" | "all";

const ALL_YEARS = "all";

const relevantCertificates = certificateData.filter(
  (certificate) => certificate.isRelevant
);

// anos que aparecem nos dados, do mais recente para o mais antigo
const years = Array.from(
  new Set(certificateData.map((certificate) => certificate.conclusion))
).sort((a, b) => b.localeCompare(a));

const yearOptions: SegmentedOption<string>[] = [
  { value: ALL_YEARS, label: "Todos os anos", count: certificateData.length },
  ...years.map((year) => ({
    value: year,
    label: year,
    count: certificateData.filter(
      (certificate) => certificate.conclusion === year
    ).length,
  })),
];

const getVisibleCertificates = (mode: CertificatesMode, year: string) => {
  if (mode === "relevant") return relevantCertificates;
  if (year === ALL_YEARS) return certificateData;
  return certificateData.filter(
    (certificate) => certificate.conclusion === year
  );
};

const modeOptions: SegmentedOption<CertificatesMode>[] = [
  {
    value: "relevant",
    label: "Relevantes",
    icon: <Star size={16} />,
    count: relevantCertificates.length,
  },
  {
    value: "all",
    label: "Todos",
    icon: <Grid size={16} />,
    count: certificateData.length,
  },
];

const getCertificateSubtitle = ({
  institute,
  duration,
  conclusion,
  inProgress,
}: CertificateProps) =>
  [
    institute,
    duration && `${duration} horas`,
    inProgress ? "Em andamento" : conclusion,
  ]
    .filter(Boolean)
    .join(" · ");

export const Certificates = () => {
  const [activeMode, setActiveMode] = useState<CertificatesMode>("relevant");
  const [activeYear, setActiveYear] = useState(ALL_YEARS);
  const [openFile, setOpenFile] = useState<DocumentFile>();
  // com poucos cards o Embla desliga o loop sozinho; containScroll: false
  // mantém cada card centralizado mesmo assim
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const visibleCertificates = getVisibleCertificates(activeMode, activeYear);
  const total = visibleCertificates.length;

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  const handleModeChange = (mode: CertificatesMode) => {
    setActiveMode(mode);
    setActiveYear(ALL_YEARS);
  };

  const handleOpenCertificate = (certificate: CertificateProps) => {
    if (!certificate.link) return;

    setOpenFile({
      title: certificate.name,
      subtitle: getCertificateSubtitle(certificate),
      link: certificate.link,
    });
  };

  const renderCard = (certificate: CertificateProps, isSelected = false) => (
    <article
      className={[
        "certificate-card",
        isSelected && "is-selected",
        !certificate.link && "is-static",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="certificate-header">
        <span className="certificate-icon">
          <Award size={20} />
        </span>
        {certificate.inProgress ? (
          <span className="certificate-status">Em andamento</span>
        ) : (
          <span className="certificate-year">{certificate.conclusion}</span>
        )}
      </div>

      <div className="certificate-body">
        <span className="certificate-institute">{certificate.institute}</span>
        <T.H3 className="certificate-title">{certificate.name}</T.H3>
      </div>

      <div className="certificate-footer">
        {certificate.duration && (
          <span className="certificate-duration">
            <Clock size={16} />
            {certificate.duration} horas
          </span>
        )}
        {certificate.link ? (
          <button
            type="button"
            className="certificate-link"
            aria-label={`Ver certificado: ${certificate.name}`}
            onClick={() => handleOpenCertificate(certificate)}
          >
            Ver certificado
            <Eye size={16} />
          </button>
        ) : (
          <span className="certificate-pending">Certificado ao concluir</span>
        )}
      </div>
    </article>
  );

  return (
    <S.CertificatesContainer>
      <div className="certificates-header">
        <Title>Certificados</Title>
        <div className="certificates-filters">
          <SegmentedControl
            label="Filtrar certificados"
            options={modeOptions}
            value={activeMode}
            onChange={handleModeChange}
          />
          {activeMode === "all" && (
            <SegmentedControl
              label="Filtrar por ano"
              options={yearOptions}
              value={activeYear}
              onChange={setActiveYear}
            />
          )}
        </div>
      </div>

      <div
        // recria o carrossel a cada filtro para voltar ao primeiro card
        key={`${activeMode}-${activeYear}`}
        className="certificates-carousel"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Certificados"
      >
        <div className="certificates-viewport" ref={emblaRef}>
          <div className="certificates-track">
            {visibleCertificates.map((certificate, index) => (
              <div
                key={certificate.name}
                className="certificates-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${total}`}
              >
                {renderCard(certificate, index === selectedIndex)}
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

      <DocumentModal file={openFile} onClose={() => setOpenFile(undefined)} />
    </S.CertificatesContainer>
  );
};
