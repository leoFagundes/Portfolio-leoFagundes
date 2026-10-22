import { useEffect, useState } from "react";
import { Download, ExternalLink, FileText } from "react-feather";
import { Modal } from "src/components/Modal";
import * as T from "src/styled/typography";
import * as S from "./style";

export type DocumentFile = {
  title: string;
  subtitle?: string;
  // caminho do PDF dentro de public/
  link: string;
};

type DocumentModalProps = {
  file?: DocumentFile;
  onClose: VoidFunction;
};

// navegadores sem leitor de PDF embutido (ex.: Chrome no Android) mostram um aviso
const canPreviewPdf =
  (navigator as Navigator & { pdfViewerEnabled?: boolean })
    .pdfViewerEnabled !== false;

const getFileName = (link: string) =>
  decodeURIComponent(link.split("/").pop() ?? "documento.pdf");

export const DocumentModal = ({ file, onClose }: DocumentModalProps) => {
  // mantém o documento na tela durante a animação de saída
  const [displayedFile, setDisplayedFile] = useState(file);

  useEffect(() => {
    if (file) {
      setDisplayedFile(file);
      return;
    }

    const timeout = setTimeout(() => setDisplayedFile(undefined), 800);
    return () => clearTimeout(timeout);
  }, [file]);

  if (!displayedFile) return null;

  return (
    <Modal
      isOpen={Boolean(file)}
      onClose={onClose}
      labelledBy="document-modal-title"
      size="wide"
    >
      <S.DocumentModalContent>
        <div className="document-header">
          <div className="document-info">
            <T.H3 id="document-modal-title">{displayedFile.title}</T.H3>
            {displayedFile.subtitle && (
              <span className="document-subtitle">
                {displayedFile.subtitle}
              </span>
            )}
          </div>
          <div className="document-actions">
            <a href={displayedFile.link} target="_blank" rel="noreferrer">
              <ExternalLink size={16} />
              Abrir em nova aba
            </a>
            <a
              className="primary"
              href={displayedFile.link}
              download={getFileName(displayedFile.link)}
            >
              <Download size={16} />
              Baixar
            </a>
          </div>
        </div>

        {canPreviewPdf ? (
          <iframe
            className="document-preview"
            title={displayedFile.title}
            src={`${displayedFile.link}#toolbar=0&navpanes=0&view=FitH`}
          />
        ) : (
          <div className="document-fallback">
            <FileText size={40} />
            <T.P2>
              Seu navegador não mostra PDFs aqui dentro. Use os botões acima
              para abrir em uma nova aba ou baixar.
            </T.P2>
          </div>
        )}
      </S.DocumentModalContent>
    </Modal>
  );
};
