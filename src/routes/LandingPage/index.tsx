import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layouts/Layout';

import { LandingPageStyle } from './LandingStyle';
// import { ProductSource } from '../../reducers/product/model';
// import { DotLoader } from 'react-spinners';
import ProductList from '../../components/ProductList';
import { RootState } from '../../reducers';
import { getProductList } from '../../mock-api';
import { saveRef } from '../../reducers/product/action';
import { EventEmitterProvider } from '../../config/eventEmitter';
import { Data } from '../../components/dummy-data/index';

interface LandingPageProps {
  loading: boolean;
  getProductListAction: () => void;
  refs: { [key: string]: HTMLElement };
  saveRefAction: (name: string, ref: HTMLDivElement) => void;
  // data: Array<Record<string, any>>;
  data: Array<object>;
}
const LandingPage: FunctionComponent<LandingPageProps> = () => {
  // const { getProductListAction, loading, data } = props;
  // useEffect(() => {
  //   getProductListAction();
  // });

  return (
    <EventEmitterProvider>
      <Layout>
        <LandingPageStyle>
          {/* {loading ? (
            <DotLoader />
          ) : ( */}
          <div className="container">
            <div className="banner">
              <img src="/banner-poster/banner-landing.png" alt="banner-poster" className="img--control" />
            </div>
            <ProductList sources={Data} />
          </div>
          {/* )} */}
        </LandingPageStyle>
      </Layout>
    </EventEmitterProvider>
  );
};

const mapStateToProps = (state: RootState) => ({
  productSource: state.productReducer.sources,
  loading: state.productReducer.loading,
  refs: state.productReducer.refs,
});

const mapDispatchToProps = {
  getProductListAction: getProductList,
  saveRefAction: saveRef,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
