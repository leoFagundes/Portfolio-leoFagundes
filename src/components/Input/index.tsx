import * as S from "./style";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "text" | "email" | "textarea";
  errorMessage?: string;
};

export const Input = ({
  placeholder,
  value,
  onChange,
  type = "text",
  errorMessage = "",
}: InputProps) => {
  return (
    <S.InputContainer>
      {type !== "textarea" ? (
        <input
          className={errorMessage && "error"}
          type={type}
          placeholder={errorMessage ? errorMessage : placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          className={errorMessage && "error"}
          placeholder={errorMessage ? errorMessage : placeholder}
          id="multiLineInput"
          name="multiLineInput"
          value={value}
          onChange={onChange}
          rows={4}
          cols={50}
        ></textarea>
      )}
    </S.InputContainer>
  );
};
