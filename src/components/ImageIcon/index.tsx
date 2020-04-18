import React, { FunctionComponent } from 'react';
import { ImageIconStyle } from './ImageIconStyle';

interface IconProps {
  isButton?: boolean;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: Function;
}

const ImageIcon: FunctionComponent<IconProps> = props => {
  const { src, className, alt, onClick, isButton, width, height } = props;
  return (
    <ImageIconStyle
      className={className}
      width={width}
      height={height}
      isButton={!!isButton}
      onClick={() => {
        if (!onClick) return;
        onClick(true);
      }}
    >
      <img src={src} alt={alt} />
    </ImageIconStyle>
  );
};

export default ImageIcon;
