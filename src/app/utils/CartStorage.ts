import { CartProduct } from "../interfaces/Product";

export const addOrUpdateToCart = (cartProduct: CartProduct): void => {
  const cart = window.localStorage.getItem('cartProducts');

  if (cart) {
    let cartProductArray = JSON.parse(cart) as CartProduct[];
    cartProductArray = cartProductArray.filter(product => product.id !== cartProduct.id);
    cartProductArray.push(cartProduct);
    window.localStorage.setItem('cartProducts', JSON.stringify(cartProductArray));
  } else {
    const newCart = [cartProduct];
    window.localStorage.setItem('cartProducts', JSON.stringify(newCart));
  }
};

export const removeFromCart = (productId: string): void => {
  const cart = window.localStorage.getItem('cartProducts');
  if (cart) {
    let cartProductArray = JSON.parse(cart) as CartProduct[];
    cartProductArray = cartProductArray.filter(product => product.id !== productId);
    window.localStorage.setItem('cartProducts', JSON.stringify(cartProductArray));
  }
};
