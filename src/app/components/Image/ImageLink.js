import React from "react";
import PropTypes from "prop-types";
import { styled } from "twin.macro";

import Image from "./Image";

const ImageLink = ({ href, src, alt, width, height, ...props }) => {
  return (
    <ImgLink href={href}>
      <Image src={src} alt={alt} width={width} height={height} {...props} />
    </ImgLink>
  );
};

ImageLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

const ImgLink = styled.a`
  display: inline-block;
`;

export default ImageLink;