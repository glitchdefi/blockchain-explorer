import tw, { styled, css, theme } from "twin.macro";
import { Button } from "../../Button";

export const StyledTab = styled(Button)(
  ({
    isActive,
    tabStyles: {
      label: { color, activeColor, size },
    },
  }) => [
    tw`
      w-full
      py-2
      lg:py-3
    `,

    css`
      background-color: ${isActive
        ? theme`colors.outer-space-2`
        : theme`colors.bgPrimary`};
      border-radius: 5px 5px 0px 0px;
      margin-right: 5px;

      &:last-child {
        margin-right: 0px;
      }

      .tab-label {
        color: ${isActive
          ? activeColor || theme`colors.primary`
          : "rgba(255,255,255,0.7)"} !important;
        font-size: ${size || "14px"};
        font-weight: ${isActive ? "bold" : "normal"};
      }

      @media (min-width: 1024px) {
        border-radius: 0px;

        &:first-child {
          border-radius: 5px 5px 0px 0px;
        }

        &:last-child {
          border-radius: 0px 0px 5px 5px;
        }
      }
    `,

    isActive &&
      css`
        @media (min-width: 1024px) {
          svg path {
            fill: ${theme`colors.primary`};
          }

          .wallet-icon path {
            stroke: ${theme`colors.primary`};
            fill: none;
          }

          .wallet-icon path:last-child {
            stroke: none;
            fill: ${theme`colors.primary`};
          }

          &:after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-right: 20px solid ${theme`colors.bgPrimary`};
            border-bottom: 10px solid transparent;
          }
        }
      `,
  ]
);
