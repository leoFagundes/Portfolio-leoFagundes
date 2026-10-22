import * as S from "./style";
import { GitHub, Linkedin, Instagram } from "react-feather";
import { useState } from "react";

export const Hero = () => {
  const [isMoonClickable, setIsMoonClickable] = useState(true);

  const handleMoonClick = () => {
    const elements = document.querySelectorAll("#line1, #line2, #line3");

    elements.forEach((element) => {
      element.classList.add("move");
      setIsMoonClickable(false);
      setTimeout(() => {
        element.classList.remove("move");
        setIsMoonClickable(true);
      }, 4000);
    });
  };

  const handleMoonClick2 = () => {
    const body = document.getElementsByTagName("body")[0];
    const github = document.getElementById("github");
    const linkedin = document.getElementById("linkedin");
    const instagram = document.getElementById("instagram");
    const svg = document.getElementById("svg");
    const name = document.getElementById("text-name");

    const randomValue = Math.random();

    if (randomValue < 0.2) {
      body.classList.add("shake");
    } else if (randomValue < 0.5) {
      github?.classList.add("roll-out-left");
      linkedin?.classList.add("roll-out-left");
      instagram?.classList.add("roll-out-left");
      svg?.classList.add("roll-out-right");
      name?.classList.add("roll-out-top");
    } else {
      body.classList.add("jello");
    }

    setIsMoonClickable(false);

    setTimeout(() => {
      body.classList.remove("shake");
      body.classList.remove("jello");
      body.classList.remove("scale-out-top");
      github?.classList.remove("roll-out-left");
      linkedin?.classList.remove("roll-out-left");
      instagram?.classList.remove("roll-out-left");
      svg?.classList.remove("roll-out-right");
      name?.classList.remove("roll-out-top");
      setIsMoonClickable(true);
    }, 4000);
  };

  const nameLetters = [
    "L",
    "e",
    "o",
    "n",
    "a",
    "r",
    "d",
    "o",
    " ",
    "F",
    "a",
    "g",
    "u",
    "n",
    "d",
    "e",
    "s",
  ];

  const professionLetters = [
    "D",
    "e",
    "s",
    "e",
    "n",
    "v",
    "o",
    "l",
    "v",
    "e",
    "d",
    "o",
    "r",
    " ",
    "W",
    "e",
    "b",
  ];

  return (
    <S.HeroContainer isMoonClickable={isMoonClickable}>
      <div className="apresentation-box">
        <div id="text-name">
          <div className="name-letters">
            {nameLetters.map((letter, index) => (
              <S.StyledH1Letter
                key={index}
                index={index}
                total={nameLetters.length}
              >
                {letter === " " ? "\u00A0" : letter}
              </S.StyledH1Letter>
            ))}
          </div>
          <div className="name-letters">
            {professionLetters.map((letter, index) => (
              <S.StyledH2Letter
                key={index}
                index={index}
                total={professionLetters.length}
                h1Total={nameLetters.length}
              >
                {letter === " " ? "\u00A0" : letter}
              </S.StyledH2Letter>
            ))}
          </div>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="hero-action primary">
            Ver projetos
          </a>
          <a href="#contact" className="hero-action secondary">
            Fale comigo
          </a>
        </div>
        <div className="social-media">
          <a
            id="github"
            href="https://github.com/leoFagundes"
            target="_blanked"
          >
            <div className="social-media-box box-1">
              <GitHub size={32} />
            </div>
          </a>
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/leonardo-fagundes-5a348a248/"
            target="_blanked"
          >
            <div className="social-media-box box-2">
              <Linkedin size={32} />
            </div>
          </a>
          <a
            id="instagram"
            href="https://www.instagram.com/leo.fagundes.50/"
            target="_blanked"
          >
            <div className="social-media-box box-3">
              <Instagram size={32} />
            </div>
          </a>
        </div>
      </div>
      <div id={`line1`} className="line"></div>
      <div id={`line2`} className="line"></div>
      <div id={`line3`} className="line"></div>

      <svg
        id="svg"
        width="1224"
        height="1216"
        viewBox="0 0 1224 1216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg"
      >
        <g id="logo-svg">
          <g id="bg-logo">
            <g id="logo">
              <circle
                id="small-elipse"
                opacity="0.3"
                cx="616"
                cy="608"
                r="343.203"
                stroke="url(#paint0_linear_189_3360)"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="10 15"
              />
              <circle
                id="medium-elipse"
                cx="616"
                cy="608"
                r="453.864"
                stroke="url(#paint1_linear_189_3360)"
                stroke-width="3"
              />
              <circle
                id="big-elipse"
                opacity="0.3"
                cx="616"
                cy="608"
                r="606.5"
                stroke="url(#paint2_linear_189_3360)"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="10 15"
              />
              <g className="orbit">
                <g id="moon-2" filter="url(#filter0_d_189_3360)">
                  <circle
                    cx="865.306"
                    cy="370.142"
                    r="11.4477"
                    fill="url(#paint3_linear_189_3360)"
                    onClick={
                      isMoonClickable
                        ? handleMoonClick2
                        : () => console.warn("Wait...")
                    }
                  />
                </g>
                <g id="moon-1" filter="url(#filter1_d_189_3360)">
                  <circle
                    cx="37.8912"
                    cy="799.431"
                    r="22.2594"
                    fill="url(#paint4_linear_189_3360)"
                    fill-opacity="0.7"
                    onClick={
                      isMoonClickable
                        ? handleMoonClick
                        : () => console.warn("Wait...")
                    }
                  />
                </g>
              </g>
            </g>
          </g>
          {/* mesmo desenho de branding/lf-logo.svg, nas cores do tema */}
          <g id="lf" transform="translate(497 410) scale(1.1)">
            <path
              id="lf-path"
              d="M0 0H24V216H168V240H0Z M48 120H216V144H72V208H48Z M48 248H72V360H48Z"
              fill="url(#lf-gradient)"
              stroke="#01A66B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_189_3360"
            x="838.858"
            y="347.695"
            width="52.8954"
            height="52.8954"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="5"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_189_3360"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.00392157 0 0 0 0 0.65098 0 0 0 0 0.419608 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_189_3360"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_189_3360"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_189_3360"
            x="0.631805"
            y="766.171"
            width="74.5188"
            height="74.5188"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="5"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_189_3360"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.00392157 0 0 0 0 0.65098 0 0 0 0 0.419608 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_189_3360"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_189_3360"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_189_3360"
            x1="419.481"
            y1="263.297"
            x2="661.572"
            y2="897.606"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0636649" stop-color="white" stop-opacity="0" />
            <stop offset="0.453106" stop-color="#01A66B" />
            <stop offset="0.892186" stop-color="#CCCCCC" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_189_3360"
            x1="906.294"
            y1="277.861"
            x2="-187.478"
            y2="1034"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0621563" stop-color="#303030" stop-opacity="0" />
            <stop offset="0.95834" stop-color="#01A66B" stop-opacity="0.7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_189_3360"
            x1="935.9"
            y1="149.456"
            x2="542.172"
            y2="1266.26"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0636649" stop-color="white" stop-opacity="0" />
            <stop offset="0.453106" stop-color="#01A66B" />
            <stop offset="0.892186" stop-color="#CCCCCC" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_189_3360"
            x1="872.747"
            y1="360.412"
            x2="859.868"
            y2="378.728"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#01A66B" />
            <stop offset="1" stop-color="#056945" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_189_3360"
            x1="52.3598"
            y1="780.51"
            x2="27.318"
            y2="816.125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#01A66B" />
            <stop offset="1" stop-color="#056945" />
          </linearGradient>
          <linearGradient
            id="lf-gradient"
            x1="0"
            y1="0"
            x2="216"
            y2="360"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#056945" />
            <stop offset="0.186246" stopColor="#01A66B" />
            <stop offset="0.619464" stopColor="#01A66B" />
            <stop offset="1" stopColor="#056945" />
          </linearGradient>
        </defs>
      </svg>
    </S.HeroContainer>
  );
};
