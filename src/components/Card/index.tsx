import React, { FunctionComponent } from 'react';
import { CardStyle } from './CardStyle';

interface CardProps {
  className?: string;
  hasHoverEffect?: boolean;
  id?: string;
  onHover?: (id: string) => void;
}

const Card: FunctionComponent<CardProps> = props => {
  const { id, onHover, children, className, hasHoverEffect = true } = props;
  return (
    <CardStyle
      className={className}
      hasHoverEffect={hasHoverEffect}
      onMouseEnter={() => {
        if (!onHover || !id) return;
        onHover(id);
      }}
    >
      {children}
    </CardStyle>
  );
};

export default Card;
