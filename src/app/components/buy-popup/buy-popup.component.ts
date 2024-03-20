import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { removeFromCart } from '../../utils/CartStorage';
import { RouterLink } from '@angular/router';
import { CartProduct } from '../../interfaces/Product';

@Component({
  selector: 'app-buy-popup',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, RouterLink],
  templateUrl: './buy-popup.component.html',
  styleUrl: './buy-popup.component.scss'
})
export class BuyPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CartProduct) {}

  removeItem(): void {
    removeFromCart(this.data.id);
  }
}
