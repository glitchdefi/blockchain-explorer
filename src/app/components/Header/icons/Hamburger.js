import React from "react";
import { styled, css, theme } from "twin.macro";

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <Wrapper open={isOpen} onClick={onClick}>
      <div id="nav-icon2">
        <div />
        <div />
        <div />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ open }) => [
  css`
    #nav-icon2 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 2rem;
      height: 2rem;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 10;

      &:focus {
        outline: none;
      }

      div {
        width: 2rem;
        height: 3px;
        background: ${theme`colors.textColor1`};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
          transform: ${open ? "rotate(45deg)" : "rotate(0)"};
        }

        :nth-child(2) {
          opacity: ${open ? "0" : "1"};
          transform: ${open ? "translateX(20px)" : "translateX(0)"};
        }

        :nth-child(3) {
          transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
        }
      }
    }
  `,
]);

export default Hamburger;
