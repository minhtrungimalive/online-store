import React, { FunctionComponent } from 'react';
// import { connect } from 'react-redux';
import Layout from '../../layouts/Layout';

// import { RootState } from '../../reducers';
// import { getProductList } from '../../mock-api';
// import { saveRef } from '../../reducers/product/action';
import { EventEmitterProvider } from '../../config/eventEmitter';
import { DetailPageStyled } from './DetailPageStyled';

// interface LandingPageProps {
//   loading: boolean;
//   getProductListAction: () => void;
//   refs: { [key: string]: HTMLElement };
//   saveRefAction: (name: string, ref: HTMLDivElement) => void;
//   data: Array<Record<string, any>>;
// }
const DetailPage: FunctionComponent<{}> = () => {
  // const { getProductListAction, loading, data } = props;

  return (
    <EventEmitterProvider>
      <Layout>
        <DetailPageStyled>
          <h1>detail page</h1>
        </DetailPageStyled>
      </Layout>
    </EventEmitterProvider>
  );
};

// const mapStateToProps = (state: RootState) => ({
//   productSource: state.productReducer.sources,
//   loading: state.productReducer.loading,
//   refs: state.productReducer.refs,
// });

export default DetailPage;
