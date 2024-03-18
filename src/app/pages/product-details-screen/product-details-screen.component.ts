import { Component } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@Component({
  selector: 'app-product-details-screen',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './product-details-screen.component.html',
  styleUrl: './product-details-screen.component.scss'
})
export class ProductDetailsScreenComponent {

}
