import { ProductCart } from "../interfaces/ProductCart";

export const addToCart = (productId: string, quantity: string): void => {
  const cart = window.localStorage.getItem('cartProducts');

  if (cart) {
    let productCartArray = JSON.parse(cart) as ProductCart[];
    productCartArray = productCartArray.filter(product => product.id !== productId);
    productCartArray.push({ id: productId, quantity });
    window.localStorage.setItem('cartProducts', JSON.stringify(productCartArray));
  } else {
    const newCart = [{ id: productId, quantity }];
    window.localStorage.setItem('cartProducts', JSON.stringify(newCart));
  }
};

export const removeFromCart = (productId: string): void => {
  const cart = window.localStorage.getItem('cartProducts');
  if (cart) {
    let productCartArray = JSON.parse(cart) as ProductCart[];
    productCartArray = productCartArray.filter(product => product.id !== productId);
    window.localStorage.setItem('cartProducts', JSON.stringify(productCartArray));
  }
};
