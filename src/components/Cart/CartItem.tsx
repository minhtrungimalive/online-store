import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { sumPriceInSource } from '../../utils/math';
import { ImageSource } from '../../reducers/gallery/model';
import { removeImageFromCart } from '../../reducers/gallery/action';
import { eventEmitter } from '../../config/eventEmitter';
import { CartItemStyle } from './CartStyle';

export interface CartItemProps extends ImageSource {
  removeImageFromCartAction: (id: string) => void;
}

const CartItem: FunctionComponent<CartItemProps> = props => {
  const { caption, imgUrl, price, unit, id, removeImageFromCartAction } = props;
  const removeCardItem = () => {
    if (!id) return;
    eventEmitter.emit('cart-remove', id);
    removeImageFromCartAction(id);
  };
  return (
    <CartItemStyle imgUrl={imgUrl}>
      <div className="img-item" />
      <span className="label">{caption}</span>
      <div className="info">
        <span className="price">
          {unit}
          {sumPriceInSource(price || 0)}
        </span>
        <button type="button" onClick={removeCardItem}>
          &times;
        </button>
      </div>
    </CartItemStyle>
  );
};

const mapDispatchToProps = {
  removeImageFromCartAction: removeImageFromCart,
};

export default connect(null, mapDispatchToProps)(CartItem);
