import React, { FunctionComponent } from 'react';
import _ from 'lodash';
import CartItem from './CartItem';
import { ImageSource } from '../../reducers/gallery/model';
import { CartListStyle } from './CartStyle';

interface CartListProps {
  sources?: ImageSource[];
  className?: string;
}

const CartList: FunctionComponent<CartListProps> = props => {
  const { sources, className } = props;

  return (
    <CartListStyle className={className}>
      {sources &&
        sources.length > 0 &&
        sources.map(item => {
          return <CartItem key={item.id} caption={item.caption} id={item.id} imgUrl={item.imgUrl} price={item.price} unit={item.unit} />;
        })}
    </CartListStyle>
  );
};

export default CartList;
