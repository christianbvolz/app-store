import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MlApiService } from '../../services/ml-api.service';
import { Product } from '../../interfaces/Product';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'app-search-screen',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './search-screen.component.html',
  styleUrl: './search-screen.component.scss'
})
export class SearchScreenComponent implements OnInit {
  #apiService = inject(MlApiService);
  #route = inject(ActivatedRoute);
  
  public getProducts = signal<Product[] | [] >([]);

  ngOnInit(): void {
    this.#route.queryParams.subscribe(queries => {
      this.#apiService.getSearchProductsList$(queries['category'], queries['q']).subscribe({
        next: (next) => this.getProducts.set(next.results),
        error: (error) => console.log(error),
        complete: () => console.log('getSearchProductsList complete'),
      });
    });
  }
}
