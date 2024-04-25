import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreApiService } from '../../services/store-api.service';
import { Product } from '../../interfaces/Product';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-search-screen',
  standalone: true,
  imports: [ProductsListComponent, MatPaginatorModule],
  templateUrl: './search-screen.component.html',
  styleUrl: './search-screen.component.scss'
})
export class SearchScreenComponent implements OnInit {
  #apiService = inject(StoreApiService);
  #route = inject(ActivatedRoute);
  
  public getProducts = signal<Product[] | [] >([]);

  ngOnInit(): void {
    this.#route.queryParams.subscribe(queries => {
      this.#apiService.getSearchProductsList$(queries['page'], queries['limit'], queries['category'], queries['q'], queries['condition']).subscribe({
        next: (next) => this.getProducts.set(next),
        error: (error) => console.log(error),
        complete: () => console.log('getSearchProductsList complete'),
      });
    });
  };
}
