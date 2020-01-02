import CartActionType from './cart.types';

export const toogleCartHidden = () => ({
  type: CartActionType.TOOGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionType.ADD_ITEM,
  payload: item
});
