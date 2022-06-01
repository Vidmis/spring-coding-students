import React from "react";
import styled from "styled-components/macro";
import LazyLoad from "react-lazyload";

import { mobile } from "styles/breakpoints";
import { Visuals, visuals } from "utils/visuals";

interface Styles {
  maxWidth?: string;
  width?: string;
  height?: string;
  margin?: string;
  maxHeight?: string;
}

interface ImageProps extends Styles {
  src?: Visuals;
  srcUrl?: string;
  mobile_src?: Visuals;
  onClick?: () => void;
  alt: string;
}

const Img = styled.img<Styles>`
  margin: ${({ margin }) => margin || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  max-height: ${({ maxHeight }) => maxHeight || ""};
`;

export const Image: React.FC<ImageProps> = ({
  alt,
  src,
  srcUrl,
  mobile_src,
  onClick,
  ...rest
}) => (
  <LazyLoad height='100%'>
    <picture onClick={onClick}>
      {mobile_src && <source media={mobile} srcSet={visuals[mobile_src]} />}
      <Img src={src ? visuals[src] : srcUrl} alt={alt} {...rest} />
    </picture>
  </LazyLoad>
);
