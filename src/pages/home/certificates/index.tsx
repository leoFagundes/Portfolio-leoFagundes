import { Title } from "src/components/Title";
import * as S from "./style";
import * as T from "src/styled/typography";
import "react-alice-carousel/lib/alice-carousel.css";
import { Fragment, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "react-feather";
import { certificateData } from "src/data/certificatesData";
import { Button } from "src/components/Button";
import { Download } from "react-feather";

export const Certificates = () => {
  const sliderRef = useRef<Slider | null>(null);

  const certificates = certificateData.map((certificate, index) => (
    <Fragment key={index}>
      <div className="certificate-title-box">
        <T.H3 className="certificate-title">{certificate.name}</T.H3>
      </div>
      <div className="certificate-info-button">
        <ul className="certificate-info">
          <li className="institute">
            <div>
              <T.P2 className="list-topic">Instituição:</T.P2>
            </div>
            <div>
              <T.P3>{certificate.institute}</T.P3>
            </div>
          </li>
          <li className="duration">
            <div>
              <T.P2 className="list-topic">Duração:</T.P2>
            </div>
            <div>
              <T.P3>{certificate.duration} horas</T.P3>
            </div>
          </li>
          <li className="conclusion">
            <div>
              <T.P2 className="list-topic">Conclusão:</T.P2>
            </div>
            <div>
              <T.P3>{certificate.conclusion}</T.P3>
            </div>
          </li>
        </ul>
        <div className="button-content">
          <a href={certificate.link} target="_blank">
            <Button width="170px" hoveredIcon={<Download size={18} />}>
              Ver Certificado
            </Button>
          </a>
        </div>
      </div>
    </Fragment>
  ));

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <S.CertificatesContainer>
      <Title>Certificados</Title>

      <div className="certificates-content">
        <div className="certificates-carousel">
          <button
            className="prev-button"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ArrowLeft />
          </button>
          <Slider ref={sliderRef} className="slider" {...settings}>
            {certificates}
          </Slider>
          <button
            className="next-button"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </S.CertificatesContainer>
  );
};
