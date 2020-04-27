import React, { FunctionComponent } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import { EventEmitterProvider } from '../../config/eventEmitter';
import { DetailPageStyled } from './DetailPageStyled';
import { Data } from '../../components/dummy-data/index';

const history = createBrowserHistory();

const data = Data[0];
console.log('data', data);

const originalPrice = data.price;
const { discount } = data;
const sellingPrice = originalPrice - originalPrice / discount;
const { name } = data;
const { description } = data;
const { imgUrl } = data;

const originalPriceFormat = originalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
const sellingPriceFormat = sellingPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

const DetailPage: FunctionComponent<{}> = () => {
  // const { getProductListAction, loading, data } = props;

  const handleBuyProduct = () => {
    const path = `/payment`;
    history.push(path);
    console.log('ban da click vao mua hang ');
  };
  return (
    <EventEmitterProvider>
      <Router history={history}>
        <Layout>
          <DetailPageStyled>
            {data ? (
              <>
                <div className="title">Product Detail</div>
                <div className="container">
                  <div className="img--container">
                    <img src={imgUrl} alt={imgUrl} className="img--control" />
                  </div>
                  <div className="product-info">
                    {name ? <div className="product-name">Product : {name}</div> : null}
                    {originalPrice ? (
                      <>
                        <div className="product-price">
                          <span className="text--selling-price">{sellingPriceFormat}</span>
                          {discount && discount > 0 ? <span className="text--original-price">{originalPriceFormat}</span> : null}
                        </div>
                      </>
                    ) : null}
                    {description ? <div className="product-description">Detail : {description}</div> : null}
                    <button onClick={handleBuyProduct} type="button" className="btn-control">
                      Buy Now
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </DetailPageStyled>
        </Layout>
      </Router>
    </EventEmitterProvider>
  );
};

// const mapStateToProps = (state: RootState) => ({
//   productSource: state.productReducer.sources,
//   loading: state.productReducer.loading,
//   refs: state.productReducer.refs,
// });

export default DetailPage;
