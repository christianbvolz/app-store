import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/Product';
import { MlApiService } from '../../services/ml-api.service';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BuyPopupComponent } from '../../components/buy-popup/buy-popup.component';
import { addToCart } from '../../utils/CartStorage';

@Component({
  selector: 'app-product-details-screen',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, MatDialogModule],
  templateUrl: './product-details-screen.component.html',
  styleUrl: './product-details-screen.component.scss'
})
export class ProductDetailsScreenComponent implements OnInit {

  #apiService = inject(MlApiService);
  #route = inject(ActivatedRoute);
  #dialog = inject(MatDialog);
  
  productId = '';
  imgs: string[] = [];
  getProduct = signal<Product | null>(null);

  ngOnInit(): void {
    this.productId = this.#route.snapshot.params['id'];
    this.#apiService.getProduct$(this.productId).subscribe({
      next: (next) => {
        this.getProduct.set(next);
        this.imgs = next.pictures.map(picture => picture.url);
      },
      error: (error) => console.log(error),
      complete: () => console.log('getProduct complete'),
    });
  }

  addToCartAndPopup(quantitiesToBuy: string): void {
    this.#apiService.getProduct$(this.productId).subscribe({
      next: (next) => {
        addToCart(this.productId, quantitiesToBuy);
        this.#dialog.open(BuyPopupComponent,
          { data: { productId: this.productId, productTitle: this.getProduct()?.title } })
      },
      error: (error) => console.log(error),
      complete: () => console.log('getProduct complete'),
    });
  };
};
