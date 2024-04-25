import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, CartProduct } from '../../interfaces/Product';
import { StoreApiService } from '../../services/store-api.service';
import { MatDialog } from '@angular/material/dialog';
import { BuyPopupComponent } from '../../components/buy-popup/buy-popup.component';
import { addOrUpdateToCart } from '../../utils/CartStorage';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-details-screen',
  standalone: true,
  imports: [],
  templateUrl: './product-details-screen.component.html',
  styleUrl: './product-details-screen.component.scss'
})
export class ProductDetailsScreenComponent implements OnInit {

  #apiService = inject(StoreApiService);
  #route = inject(ActivatedRoute);
  #dialog = inject(MatDialog);
  imgUrl = '';
  productId = '';
  getProduct = signal<Product | null>(null);
  
  ngOnInit(): void {
    this.productId = this.#route.snapshot.params['id'];
    this.imgUrl = environment.baseUrl + '/images/' + this.productId + '-p.jpg';
    this.#apiService.getProduct$(this.productId).subscribe({
      next: (next) => {
        this.getProduct.set(next);
        console.log(this.getProduct());
        
      },
      error: (error) => console.log(error),
      complete: () => console.log('getProduct complete'),
    });
  }

  addToCartAndPopup(quantitiesToBuy: string): void {
    this.#apiService.getProduct$(this.productId).subscribe({
      next: (next) => {
        const cartProduct = { ...this.getProduct(), order_quantity: quantitiesToBuy } as CartProduct;
        addOrUpdateToCart(cartProduct);
        this.#dialog.open(BuyPopupComponent,
          { data: cartProduct })
      },
      error: (error) => console.log(error),
      complete: () => console.log('getProduct complete'),
    });
  };
};
