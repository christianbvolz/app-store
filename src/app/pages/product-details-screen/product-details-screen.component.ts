import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';

@Component({
  selector: 'app-product-details-screen',
  standalone: true,
  imports: [HeaderMenuComponent],
  templateUrl: './product-details-screen.component.html',
  styleUrl: './product-details-screen.component.scss'
})
export class ProductDetailsScreenComponent {

}
