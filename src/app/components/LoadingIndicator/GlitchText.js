import React from "react";
import { useTranslation } from "react-i18next";
import { css, theme } from "twin.macro";

export function GlitchText() {
  const { t } = useTranslation();
  return (
    <p data-text={t("common.loading")} css={[styles]}>
      {t("common.loading")}
    </p>
  );
}

const styles = css`
    font-size: 18px;
    line-height: 1.5;
    margin: auto;
    color: ${theme`colors.primary`};
    text-align: center;
    animation: glitch-p 6s infinite alternate;

    &::before,
    &::after {
      --top: 0;
      --left: 0;
      --v-height: 30%;

      --n-tenth: calc(var(20) * 0.1 * var(--top));
      --t-cut: calc(var(--n-tenth) / var(20) * 100%);
      --b-cut: calc(var(--t-cut) + var(--v-height));

      content: attr(data-text);
      position: absolute;
      width: 100%;
      left: 0;
      text-align: center;

      filter: drop-shadow(0 0 transparent);

      text-shadow: calc(var(--left) * -1em) 0 0.02em lime,
        calc(var(--left) * -2em) 0 0.02em ${theme`colors.secondary`};
    
      clip-path: polygon(
        0% var(--t-cut),
        100% var(--t-cut),
        100% var(--b-cut),
        0% var(--b-cut)
      );
    }

    &::before {
      animation: glitch-b 1.7s infinite alternate-reverse;
    }
    &::after {
      animation: glitch-a 2.1s infinite alternate;
    }
  }

  @keyframes glitch-p {
    17% { --scale: .87; }
    31% { --scale: 1.005; }
    37% { --scale: 1.01; }
    47% { --scale: .90; }
    87% { --scale: 1; }
  }

  @keyframes glitch-a {
    10%,
    30%,
    50%,
    70%,
    90% {
      --top: 0;
      --left: 0;
    }
    0% {
      --v-height: 15%;
    }
    20% {
      --left: 0.005;
    }
    40% {
      --left: 0.01;
      --v-height: 20%;
      --top: 3;
    }
    60% {
      --left: 0.03;
      --v-height: 25%;
      --top: 6;
    }
    80% {
      --left: 0.07;
      --v-height: 5%;
      --top: 8;
    }
    100% {
      --left: 0.083;
      --v-height: 30%;
      --top: 1;
    }
  }

  @keyframes glitch-b {
    10%,
    30%,
    50%,
    70%,
    90% {
      --top: 0;
      --left: 0;
    }
    0% {
      --v-height: 15%;
      --top: 10;
    }
    20% {
      --left: -0.00005;
    }
    40% {
      --left: -0.01;
      --v-height: 17%;
      --top: 3;
    }
    60% {
      --left: -0.03;
      --v-height: 35%;
      --top: 6;
    }
    80% {
      --left: -0.07;
      --v-height: 5%;
      --top: 8;
    }
    100% {
      --left: -0.083;
      --v-height: 30%;
      --top: 1;
    }
`;
