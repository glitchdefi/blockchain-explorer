import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

export function ModalContainer({ children, onBackdropClick }) {
  return (
    <Wrapper onClick={onBackdropClick}>
      <div
        tw="relative w-auto my-6 mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div tw="relative w-auto my-6 mx-auto">
          <div tw="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-big-stone outline-none focus:outline-none">
            <div tw="relative p-8 flex-auto">{children}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = tw.div`
 justify-center 
 items-center 
 flex 
 overflow-x-hidden 
 overflow-y-auto 
 fixed 
 inset-0 
 z-50 
 outline-none 
 focus:outline-none
`;

ModalContainer.propTypes = {
  children: PropTypes.element,
  onBackdropClick: PropTypes.func
};
