import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import tw from "twin.macro";

import { ModalContainer } from "./ModalContainer";

function hasDOM() {
  return !!(typeof window !== "undefined" && window.document);
}

export function Modal({ children, isOpen, onBackdropClick }) {
  const container = hasDOM() ? document.body : null;

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <ModalContainer onBackdropClick={onBackdropClick}>
        {children}
      </ModalContainer>
      <Backdrop />
    </>,
    container
  );
}

const Backdrop = tw.div`opacity-60 fixed inset-0 z-40 bg-black`;

Modal.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  onBackdropClick: PropTypes.func,
};
