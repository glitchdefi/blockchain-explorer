import React from "react";
import PropTypes from "prop-types";
import tw, { styled, css } from "twin.macro";
import { ImageLink } from "../Image";

export function Avatar({ href, src, alt, width, height, ...props }) {
  return (
    <Wrapper>
      <ImageLink
        href={href}
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...props}
      />
    </Wrapper>
  );
}

ImageLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

const Wrapper = styled.div(() => [tw``, css``]);
