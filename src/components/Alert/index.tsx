import { X } from "react-feather";
import * as S from "./style";
import * as T from "src/styled/typography";
import { useEffect } from "react";

type AlertProps = {
  message: string;
  type: "success" | "danger" | undefined;
  isOpen: boolean;
  onClose: VoidFunction;
  duration?: number;
  top?: string;
};

export const Alert = ({
  message,
  type,
  isOpen,
  onClose,
  duration = 3,
  top = "0",
}: AlertProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    <>
      {isOpen && (
        <S.AlertContainer top={top} type={type ?? "success"}>
          <T.P1>{message}</T.P1>
          <X size={20} onClick={onClose} />
        </S.AlertContainer>
      )}
    </>
  );
};
