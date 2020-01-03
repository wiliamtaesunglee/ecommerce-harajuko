import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({toogleCartHidden, itemCount}) => (
  <div className='cart-icon' onClick={toogleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
