import { ReactNode } from "react";
import * as S from "./style";
import { X } from "react-feather";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: VoidFunction;
};

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
  };

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <S.ModalContainer
        isOpen={isOpen ? "true" : "false"}
        onClick={handleContainerClick}
      >
        <div className="modal-content" onClick={handleContentClick}>
          <X size={24} className="close-modal-icon" onClick={onClose} />
          {children}
        </div>
      </S.ModalContainer>
    </>
  );
};
