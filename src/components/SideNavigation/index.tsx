import React, { FunctionComponent } from 'react';
import { SideNavigationStyle } from './SideNavigationStyle';

interface SideNavigationProps {
  direction?: 'left' | 'right';
  onRefEvent?: (e: HTMLDivElement) => void;
}

const SideNavigation: FunctionComponent<SideNavigationProps> = props => {
  const { direction, children, onRefEvent } = props;
  return (
    <SideNavigationStyle
      direction={direction}
      ref={r => {
        if (!r || !onRefEvent) return;
        onRefEvent(r);
      }}
    >
      {children}
    </SideNavigationStyle>
  );
};

export default SideNavigation;
