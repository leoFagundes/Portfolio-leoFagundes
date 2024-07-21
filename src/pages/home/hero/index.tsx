import * as T from "src/styled/typography";
import * as S from "./style";
import { GitHub, Linkedin, Instagram } from "react-feather";

export const Hero = () => {
  const handleMoonClick = () => {
    const elements = document.querySelectorAll("#line1, #line2, #line3");

    elements.forEach((element) => {
      element.classList.add("move");
      setTimeout(() => {
        element.classList.remove("move");
      }, 5000);
    });
  };

  return (
    <S.HeroContainer>
      <div className="apresentation-box">
        <T.H1>Leonardo Fagundes</T.H1>
        <T.H2>Desenvolvedor Web</T.H2>
        <div className="social-media">
          <a href="https://github.com/leoFagundes" target="_blanked">
            <div className="social-media-box box-1">
              <GitHub size={32} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-fagundes-5a348a248/"
            target="_blanked"
          >
            <div className="social-media-box box-2">
              <Linkedin size={32} />
            </div>
          </a>
          <a
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

      {/* <svg
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
      </svg> */}
      <svg
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
                    onClick={handleMoonClick}
                  />
                </g>
                <g id="moon-1" filter="url(#filter1_d_189_3360)">
                  <circle
                    cx="37.8912"
                    cy="799.431"
                    r="22.2594"
                    fill="url(#paint4_linear_189_3360)"
                    fill-opacity="0.7"
                    onClick={handleMoonClick}
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="lf">
            <path
              id="lf-path"
              d="M512.115 633.571L513.568 411.917C513.568 409 513.567 409 509.936 409H501.946C499.04 409 499.04 409 499.04 411.917L497.587 646.696C497.587 650.341 497.587 650.341 501.946 650.341H571.677C574.582 650.341 574.583 650.341 574.583 653.258V799.083C574.583 802 574.583 802 577.488 802H584.752C587.657 802 587.657 802 587.657 799.083V653.258C587.657 650.341 587.657 650.341 590.563 650.341H687.17C692.98 650.341 692.98 650.341 692.981 643.779C692.981 637.217 692.981 637.217 687.17 637.217H590.563C587.657 637.217 587.657 637.217 587.657 634.301V578.887C587.657 575.97 587.657 575.97 590.563 575.97H791.767C798.304 575.97 798.304 575.97 798.304 570.137C798.304 562.846 798.304 562.846 791.767 562.846H577.488C574.583 562.846 574.583 562.846 574.583 565.762V634.301C574.583 637.217 574.583 637.217 571.677 637.217H515.02C512.115 637.217 512.115 637.217 512.115 633.571Z"
              fill="url(#paint5_linear_189_3360)"
              stroke="#01A66B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            {/* <path
              id="lf-2"
              d="M512.115 633.571C568.883 554.48 588.763 508.549 513.568 411.917C511.513 409.277 511.112 409 509.936 409H501.946C499.04 409 498.383 410.715 499.04 411.917C550.094 505.261 540.757 555.923 497.587 646.696C497.587 648.46 499.179 650.341 501.946 650.341C532.996 635.132 549.242 631.242 571.677 650.341L571.8 650.449C573.166 651.642 573.205 651.677 574.583 653.258C628.089 714.663 622.529 746.128 574.583 799.083C573.96 799.771 575.551 802 577.488 802H583.506C584.648 802 585.766 800.567 587.657 799.083C652.646 748.095 661.056 716.938 587.657 653.258C585.893 651.642 588.28 648.46 590.563 650.341C630.348 686.409 651.587 687.98 687.17 650.341C690.453 646.868 694.399 642.798 693.292 640.504C690.831 635.405 689.314 635.287 687.17 637.217C650.517 670.206 629.317 668.829 590.563 637.217C588.555 635.579 587.657 635.731 587.657 634.301V578.887C587.657 576.355 589.259 575.054 590.563 575.97C668.949 631.072 713.117 621.015 791.767 575.97C798.304 572.226 798.304 572.087 798.304 570.137C798.304 563.336 798.304 560.949 791.767 562.846C710.101 593.283 663.369 596.035 577.488 562.846C575.681 562.148 574.583 563.188 574.583 565.762V634.301C574.583 636.526 572.757 638.443 571.677 637.217C552.732 615.715 540.266 616.165 515.02 637.217C513.941 638.117 511.112 634.969 512.115 633.571Z"
              fill="url(#paint6_linear_189_3360)"
            />
            <path
              id="lf-3"
              d="M535.981 633.571C496.538 549.37 499.493 498.468 537.433 411.917C537.433 409 537.433 409 533.801 409H525.811C522.906 409 523.348 409 521.454 411.917C464.064 500.252 452.561 570.355 521.453 646.696C523.045 648.46 523.045 648.37 525.811 650.341C558.34 673.519 571.736 664.532 595.543 650.341C597.826 650.846 597.826 650.846 598.448 653.258C541.461 709.849 557.012 741.847 598.448 799.083C600.213 801.204 600.213 802 601.354 802H608.617C611.523 802 612.146 801.204 611.523 799.083C585.094 741.853 575.442 709.857 611.523 653.258C612.553 651.642 612.942 651.29 614.428 650.341C651.153 626.916 672.439 630.048 711.035 650.341C713.976 651.888 716.846 650.341 716.846 643.779C716.846 638.913 714.772 639.299 711.035 637.217C674.116 616.641 658.288 617.433 614.428 637.217C612.942 637.888 612.146 635.731 611.523 634.301C601.231 610.681 594.822 600.527 611.523 578.887C612.942 577.048 612.942 577.656 614.428 575.97C663.62 520.194 727.108 549.196 815.632 575.97C820.129 577.33 822.17 575.661 822.17 570.137C822.169 564.927 821.782 564.578 815.632 562.846C734.144 539.897 691.549 494.669 601.354 562.846C599.417 564.31 600.213 563.669 598.448 565.762C575.112 593.443 604.718 611.864 598.448 634.301C597.826 636.526 597.826 636.403 595.543 637.217C570.297 646.213 557.386 654.154 540.547 638.913C539.025 637.536 537.365 636.526 535.981 633.571Z"
              fill="url(#paint7_linear_189_3360)"
            /> */}
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
            id="paint5_linear_189_3360"
            x1="527.369"
            y1="408.271"
            x2="756.412"
            y2="664.061"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#056945" />
            <stop offset="0.186246" stop-color="#01A66B" />
            <stop offset="0.619464" stop-color="#01A66B" />
            <stop offset="1" stop-color="#056945" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_189_3360"
            x1="527.369"
            y1="408.271"
            x2="756.412"
            y2="664.061"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#056945" />
            <stop offset="0.186246" stop-color="#01A66B" />
            <stop offset="0.619464" stop-color="#01A66B" />
            <stop offset="1" stop-color="#056945" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_189_3360"
            x1="551.235"
            y1="408.271"
            x2="780.278"
            y2="664.061"
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
