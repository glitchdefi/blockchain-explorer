import React from "react";
import PropTypes from "prop-types";

import { Link } from "../Link";
import Image from "./Image";

const ImageLink = ({ href, src, alt, width, height }) => {
  return (
    <Link href={href}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
};

ImageLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImageLink;
