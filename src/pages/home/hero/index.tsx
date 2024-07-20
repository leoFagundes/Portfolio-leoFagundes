import * as T from "src/styled/typography";
import * as S from "./style";
import { GitHub, Linkedin, Instagram } from "react-feather";

export const Hero = () => {
  return (
    <S.HeroContainer>
      <div className="apresentation-box">
        <T.H1>Leonardo Fagundes</T.H1>
        <T.H2>Desenvolvedor Web</T.H2>
        <div className="social-media">
          <a href="https://github.com/leoFagundes" target="_blanked">
            <div className="social-media-box">
              <GitHub size={32} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-fagundes-5a348a248/"
            target="_blanked"
          >
            <div className="social-media-box">
              <Linkedin size={32} />
            </div>
          </a>
          <a
            href="https://www.instagram.com/leo.fagundes.50/"
            target="_blanked"
          >
            <div className="social-media-box">
              <Instagram size={32} />
            </div>
          </a>
        </div>
      </div>
      <svg
        width="1224"
        height="1045"
        viewBox="0 0 1224 1045"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg"
      >
        <g id="bg-logo">
          <g id="logo">
            <circle
              id="small-elipse"
              opacity="0.3"
              cx="616"
              cy="437"
              r="343.203"
              stroke="url(#paint0_linear_88_1651)"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="10 15"
            />
            <circle
              id="medium-elipse"
              cx="616"
              cy="437"
              r="453.864"
              stroke="url(#paint1_linear_88_1651)"
              stroke-width="3"
            />
            <circle
              id="big-elipse"
              opacity="0.3"
              cx="616"
              cy="437"
              r="606.5"
              stroke="url(#paint2_linear_88_1651)"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="10 15"
            />
            <g className="orbit">
              <g id="moon-2" filter="url(#filter0_d_88_1651)">
                <circle
                  cx="865.306"
                  cy="199.142"
                  r="11.4477"
                  fill="url(#paint3_linear_88_1651)"
                />
              </g>
              <g id="moon-1" filter="url(#filter1_d_88_1651)">
                <circle
                  cx="37.8913"
                  cy="628.431"
                  r="22.2594"
                  fill="url(#paint4_linear_88_1651)"
                  fill-opacity="0.7"
                />
              </g>
            </g>
          </g>
          <g id="logo-lf">
            <g id="lf" filter="url(#filter2_d_88_1651)">
              <path
                d="M529.056 456.195L530.452 245.805C530.452 243 530.452 243 526.961 243H517.188C514.396 243 514.396 243 514.396 245.805L513 471.623C513 475.13 513 475.13 517.188 475.13H581.411C584.203 475.13 584.203 475.13 584.203 477.234V618.195C584.203 621 584.203 621 586.995 621L596.768 621C599.56 621 599.56 621 599.56 618.195V477.234C599.56 475.13 599.56 475.13 602.353 475.13H695.196C700.78 475.13 700.78 475.13 700.78 468.117C700.78 459.701 700.78 459.701 695.196 459.701H602.353C599.56 459.701 599.56 459.701 599.56 457.597V408.506C599.56 406.403 599.56 406.403 602.353 406.403H795.717C802 406.403 802 406.403 802 397.987C802 390.974 802 390.974 795.717 390.974H588.391C584.203 390.974 584.203 390.974 584.203 394.48V457.597C584.203 459.701 584.203 459.701 581.411 459.701H532.546C529.056 459.701 529.055 459.701 529.056 456.195Z"
                fill="url(#paint5_linear_88_1651)"
                stroke="#01A66B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_88_1651"
            x="838.858"
            y="176.695"
            width="52.8955"
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
              result="effect1_dropShadow_88_1651"
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
              result="effect1_dropShadow_88_1651"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_88_1651"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_88_1651"
            x="0.631836"
            y="595.171"
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
              result="effect1_dropShadow_88_1651"
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
              result="effect1_dropShadow_88_1651"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_88_1651"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_88_1651"
            x="508"
            y="238"
            width="299"
            height="388"
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
              radius="1"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_88_1651"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.00392157 0 0 0 0 0.65098 0 0 0 0 0.419608 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_88_1651"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_88_1651"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_88_1651"
            x1="419.481"
            y1="92.2971"
            x2="661.572"
            y2="726.606"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0636649" stop-color="white" stop-opacity="0" />
            <stop offset="0.453106" stop-color="#01A66B" />
            <stop offset="0.892186" stop-color="#CCCCCC" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_88_1651"
            x1="906.294"
            y1="106.861"
            x2="-187.478"
            y2="863.005"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0621563" stop-color="#303030" stop-opacity="0" />
            <stop offset="0.95834" stop-color="#01A66B" stop-opacity="0.7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_88_1651"
            x1="935.9"
            y1="-21.5439"
            x2="542.172"
            y2="1095.26"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0636649" stop-color="white" stop-opacity="0" />
            <stop offset="0.453106" stop-color="#01A66B" />
            <stop offset="0.892186" stop-color="#CCCCCC" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_88_1651"
            x1="872.747"
            y1="189.412"
            x2="859.868"
            y2="207.728"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#01A66B" />
            <stop offset="1" stop-color="#056945" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_88_1651"
            x1="52.3599"
            y1="609.51"
            x2="27.318"
            y2="645.125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#01A66B" />
            <stop offset="1" stop-color="#056945" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_88_1651"
            x1="541.621"
            y1="242.299"
            x2="761.942"
            y2="488.145"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#056945" />
            <stop offset="0.186246" stop-color="#01A66B" />
            <stop offset="0.619464" stop-color="#01A66B" />
            <stop offset="1" stop-color="#056945" />
          </linearGradient>
        </defs>
      </svg>
    </S.HeroContainer>
  );
};
