import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { GitHub, Instagram, Linkedin, Mail } from "react-feather";
import { useEffect, useState } from "react";
import { Loader } from "src/components/Loader";
import emailjs from "@emailjs/browser";
import { Alert } from "src/components/Alert";

const INPUT_NAME_ERROR = "Nome inválido";
const INPUT_EMAIL_ERROR = "Email inválido";
const INPUT_CONTENT_ERROR = "Conteúdo inválido";

type AlertProps = {
  isAlertOpen: boolean;
  message: string;
  type: "success" | "danger" | undefined;
};

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alertConfigs, setAlertConfigs] = useState<AlertProps>();
  const [form, setForm] = useState({
    nameValue: "",
    emailValue: "",
    contentValue: "",
  });
  const [formError, setFormError] = useState({
    nameError: "",
    emailError: "",
    contentError: "",
  });

  useEffect(() => {
    let errors = { ...formError };

    if (form.nameValue) {
      errors.nameError = "";
    }
    if (form.emailValue) {
      errors.emailError = "";
    }
    if (form.contentValue) {
      errors.contentError = "";
    }
    setFormError(errors);
  }, [form]);

  const validateForm = () => {
    let isValide = true;
    let errors = { ...formError };

    if (!form.nameValue.trim()) {
      errors.nameError = INPUT_NAME_ERROR;
      isValide = false;
    } else {
      errors.nameError = "";
    }

    if (!form.emailValue.trim()) {
      errors.emailError = INPUT_EMAIL_ERROR;
      isValide = false;
    } else {
      errors.emailError = "";
    }

    if (!form.contentValue.trim()) {
      errors.contentError = INPUT_CONTENT_ERROR;
      isValide = false;
    } else {
      errors.contentError = "";
    }

    setFormError(errors);
    return isValide;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const templateParams = {
        from_name: form.nameValue,
        message: form.contentValue,
        email: form.emailValue,
      };

      const response = await emailjs.send(
        "service_c7h51ab",
        "template_oyyaw83",
        templateParams,
        "SIMSqB4eHRWnaQaui"
      );

      console.log("E-mail enviado:", response.status, response.text);

      setForm({
        nameValue: "",
        emailValue: "",
        contentValue: "",
      });

      setTimeout(() => {
        setAlertConfigs({
          message: "Email enviado com sucesso",
          isAlertOpen: true,
          type: "success",
        });
      }, 3000);
    } catch (error) {
      console.log("Erro ao enviar o e-mail: ", error);
      setTimeout(() => {
        setAlertConfigs({
          message: "Falha ao enviar o email",
          isAlertOpen: true,
          type: "danger",
        });
      }, 3000);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <S.ContactContainer>
      <Title>Contato</Title>
      <div className="contact-content">
        {alertConfigs && (
          <Alert
            message={alertConfigs.message}
            top="-35px"
            isOpen={alertConfigs.isAlertOpen}
            onClose={() =>
              setAlertConfigs({ ...alertConfigs, isAlertOpen: false })
            }
            type={alertConfigs.type}
          />
        )}
        {isLoading ? (
          <div className="loading-container">
            <Loader />
          </div>
        ) : (
          <div className="contact-form">
            <Input
              value={form.nameValue}
              onChange={(e) => setForm({ ...form, nameValue: e.target.value })}
              placeholder="Digite seu nome"
              errorMessage={formError.nameError}
            />
            <Input
              value={form.emailValue}
              onChange={(e) => setForm({ ...form, emailValue: e.target.value })}
              placeholder="Digite seu email"
              errorMessage={formError.emailError}
              type="email"
            />
            <Input
              value={form.contentValue}
              onChange={(e) =>
                setForm({ ...form, contentValue: e.target.value })
              }
              type="textarea"
              placeholder="Digite sua mensagem"
              errorMessage={formError.contentError}
            />
            <Button
              onClick={handleSubmit}
              hoveredIcon={<Mail size={16} />}
              iconDeslocation="20px"
            >
              Enviar
            </Button>
          </div>
        )}

        <div className="contact-info">
          <div className="contact-email">
            <T.H3>Email</T.H3>
            <T.P1 className="email">leofagundes2015@gmail.com</T.P1>
          </div>
          <div className="contact-social-media">
            <T.H3>Redes Sociais</T.H3>
            <div className="social-media">
              <div className="github">
                <a href="https://github.com/leoFagundes" target="_blanked">
                  <div className="social-media-box box-1">
                    <GitHub size={32} />
                  </div>
                </a>
                <T.P2>/leoFagundes</T.P2>
              </div>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/leonardo-fagundes-5a348a248/"
                  target="_blanked"
                >
                  <div className="social-media-box box-2">
                    <Linkedin size={32} />
                  </div>
                </a>
                <T.P2>/leonardo-fagundes</T.P2>
              </div>
              <div className="instagram">
                <a
                  href="https://www.instagram.com/leo.fagundes.50/"
                  target="_blanked"
                >
                  <div className="social-media-box box-3">
                    <Instagram size={32} />
                  </div>
                </a>
                <T.P2>/leo.fagundes.50</T.P2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.ContactContainer>
  );
};
