import React, { FunctionComponent } from 'react';
import LogoStyled from './LogoStyled';

const Logo: FunctionComponent<{}> = () => {
  return (
    <LogoStyled>
      <p className="logo">minhtrung.imalive</p>
      <p className="slogan">smart phone world's</p>
    </LogoStyled>
  );
};

export default Logo;
