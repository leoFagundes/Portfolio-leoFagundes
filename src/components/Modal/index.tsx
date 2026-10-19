import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as S from "./style";
import { X } from "react-feather";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: VoidFunction;
  labelledBy?: string;
  size?: "default" | "wide";
};

export const Modal = ({
  children,
  isOpen,
  onClose,
  labelledBy,
  size = "default",
}: ModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
  };

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return createPortal(
    <S.ModalContainer
      $isOpen={isOpen}
      $size={size}
      onClick={handleContainerClick}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        onClick={handleContentClick}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="close-modal-icon"
          aria-label="Fechar"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </S.ModalContainer>,
    document.body
  );
};
