import React, { FunctionComponent } from 'react';
import PaymentPageStyled from './PaymentPageStyled';
import { EventEmitterProvider } from '../../config/eventEmitter';
import Layout from '../../layouts/Layout';

const PaymentPage: FunctionComponent<{}> = () => {
  return (
    <EventEmitterProvider>
      <Layout>
        <PaymentPageStyled>
          <h1>hello</h1>
          <h2>abc</h2>
        </PaymentPageStyled>
      </Layout>
    </EventEmitterProvider>
  );
};

export default PaymentPage;
