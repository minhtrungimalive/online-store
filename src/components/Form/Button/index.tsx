import React, { FunctionComponent, ReactElement } from 'react';
import { css } from '@emotion/core';
import { ButtonStyle } from './ButtonStyle';

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset' | undefined;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon?: ReactElement;
  background?: string;
  color?: string;
  reverse?: boolean;
  hover?:
    | {
        color: string;
        background: string;
      }
    | 'none';
  width?: number;
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = props => {
  const { className, type = 'button', width, reverse, background, color, label, icon, onClick } = props;
  return (
    <ButtonStyle
      className={className}
      type={type}
      onClick={onClick}
      css={css`
        background: ${background};
        flex-direction: ${!reverse ? 'row' : 'row-reverse'};
        color: ${color};
        max-width: ${width}em;
      `}
    >
      <span>{label}</span>
      {icon}
    </ButtonStyle>
  );
};

export default Button;
