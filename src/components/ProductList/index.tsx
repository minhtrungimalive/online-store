import React, { FunctionComponent } from 'react';
import ProductListStyled from './ProductListStyed';
// import { ProductSource } from '../../reducers/product/model';
import Product from './Product';

interface ProductListProps {
  // sources: Array<Record<string, any>>;
  sources: Array<object>;
}

const ProductList: FunctionComponent<ProductListProps> = props => {
  const { sources } = props;

  if (!sources || sources.length <= 0) return null;
  return (
    <ProductListStyled>
      <div className="column column-5">
        {sources.map((source: any, idx: number) => {
          return (
            <div className="item" key={idx}>
              <Product productInfo={source} className="product" />
            </div>
          );
        })}
      </div>
    </ProductListStyled>
  );
};

export default ProductList;
