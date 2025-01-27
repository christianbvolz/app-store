import { Component, Input, signal } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Product } from '../../interfaces/Product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatGridListModule, RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})

export class ProductsListComponent {
  public productsList = signal<Product[] | []>([]);

  @Input({ required: true }) set setProductsList(value: Product[] | []) {
    console.log(value);
    
    this.productsList.set(value);
  }
}
