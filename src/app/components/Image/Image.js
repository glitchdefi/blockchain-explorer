import React, { useEffect, useRef, useState } from "react";
import tw, { styled } from "twin.macro";
import PropTypes from "prop-types";
import observerOptions from "./options";
import Wrapper from "./Wrapper";

const StyledImage = styled.img(() => [
  tw`absolute top-0 left-0 w-full h-full max-w-full`,
]);

const Placeholder = styled.div(() => [tw`absolute top-0 left-0 w-full h-full`]);

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
    <Wrapper ref={imgRef} {...otherProps}>
      {isLoaded ? <StyledImage src={src} alt={alt} /> : <Placeholder />}
    </Wrapper>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  otherProps: PropTypes.object,
};

export default Image;
