import React, { useEffect, useRef, useState } from "react";
import tw, { styled, css } from "twin.macro";
import PropTypes from "prop-types";
import observerOptions from "./options";

const StyledImage = styled.img(({ width, height }) => [
  css`
    height: ${height ? height : 'auto'};
    width: ${width ? width + 'px' : 'auto'};
  `,
]);

const Placeholder = styled.div(() => [tw`h-full`]);

const Image = ({ src, alt, ...otherProps }) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef?.current || null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      });
    }, observerOptions);
    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <span ref={imgRef}>
      {isLoaded ? (
        <StyledImage src={src} alt={alt} {...otherProps} />
      ) : (
        <Placeholder />
      )}
    </span>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  otherProps: PropTypes.object,
};

export default Image;
