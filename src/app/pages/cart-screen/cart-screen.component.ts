import { Component, OnInit, signal } from '@angular/core';
import { CartProduct } from '../../interfaces/Product';
import { CartComponent } from '../../components/cart/cart.component';
import { removeFromCart } from '../../utils/CartStorage';

@Component({
  selector: 'app-cart-screen',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-screen.component.html',
  styleUrl: './cart-screen.component.scss'
})
export class CartScreenComponent implements OnInit {
  getCart = signal<CartProduct[] | []>([]);
  totalPrice = signal<Number>(0);

  ngOnInit(): void {
    this.getCartFromLocalStorage();
  }

  getCartFromLocalStorage(): void {
    const localStorageCart = window.localStorage.getItem('cartProducts');
    if (localStorageCart) {
      const localStorageCartParse = JSON.parse(localStorageCart) as CartProduct[];
      this.getCart.set(localStorageCartParse);
    }
  }

  updateQuantity(event: { id: string, quantity: string }): void {
    const newCart = this.getCart().map(product => {
      if (product.id === event.id) return { ...product , order_quantity: event.quantity };
      return product;
    });
    window.localStorage.setItem('cartProducts', JSON.stringify(newCart));
    this.getCart.set(newCart);
  }

  removeItem(id: string) {
    removeFromCart(id);
    this.getCartFromLocalStorage();
  }
}
