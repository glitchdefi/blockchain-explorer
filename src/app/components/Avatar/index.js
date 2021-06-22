import React from "react";
import PropTypes from "prop-types";
import tw, { theme, styled, css } from "twin.macro";
import { ImageLink } from "../Image";

export function Avatar({ href, src, alt, width, height, ...props }) {
  return (
    <Wrapper
      width={width}
      height={height}
      {...props}>
      <div className="ring">
        <ImageLink
          href={href}
          src={src}
          alt={alt}
          {...props}
        />
      </div>
    </Wrapper>
  );
}

ImageLink.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

const Wrapper = styled.div.attrs(props => ({
  // we can define static props
  className: 'glc-avatar ' + (props.className ? props.className : ''),
}))`
  display: flex;
  .ring {
    width: ${props => props.width ? props.width + 'px' : 'auto' };
    height: ${props => props.height ? props.height + 'px' : 'auto' };
    position: relative;
    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      border: 2px solid ${theme`colors.secondary`};
      width: 100%;
      height: 100%;
      top: -2px;
      left: -1px;
      border-radius: 50%;
    }
    &:after {
      content: '';
      position: absolute;
      z-index: 0;
      border: 2px solid ${theme`colors.primary`};
      width: 100%;
      height: 100%;
      top: -2px;
      left: -2px;
      border-radius: 50%;
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }
    a {
      box-sizing: border-box;
      border: 2px solid ${theme`colors.white`};
      border-radius: 50%;
      line-height: 0;
      padding: 5px;
      position: relative;
      z-index: 2;
    }
  }
`;
