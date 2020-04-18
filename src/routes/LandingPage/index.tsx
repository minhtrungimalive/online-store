import React, { FunctionComponent } from 'react';
import Layout from '../../layouts/Layout';

import { LandingPageStyle } from './LandingStyle';

const LandingPage: FunctionComponent = () => {
  return (
    <Layout>
      <LandingPageStyle>
        <div>Welcome to my online-store</div>
      </LandingPageStyle>
    </Layout>
  );
};

export default LandingPage;
