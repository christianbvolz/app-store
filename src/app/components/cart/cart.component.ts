import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, input, signal } from '@angular/core';
import { CartProduct } from '../../interfaces/Product';
import { removeFromCart } from '../../utils/CartStorage';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnChanges {
  // @Input({ required: true }) set setCartList(value: CartProduct[] | []) {
  //   this.cartList.set(value);
  // }
  // cartList = signal<CartProduct[] | []>([]);
  cartList = input.required<CartProduct[]>();

  @Output() public outputQuantity = new EventEmitter();
  @Output() public outputRemoveItem = new EventEmitter();

  totalPrice = signal<Number>(0);

  ngOnInit(): void {
    this.calculateTotalPrice();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    const total = this.cartList().reduce((acc, product) => {
      return acc + (product.price * Number(product.order_quantity));
    }, 0);
    this.totalPrice.set(total);
  }
  
  sendQuantity(obj: { quantity:string, id: string }): void {
    this.outputQuantity.emit(obj);
  }

  removeItem(id: string): void {
    this.outputRemoveItem.emit(id);
  }

}
