import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MlApiService } from '../../services/ml-api.service';
import { Product } from '../../interfaces/Product';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';

@Component({
  selector: 'app-search-screen',
  standalone: true,
  imports: [SearchInputComponent, CategoryListComponent],
  templateUrl: './search-screen.component.html',
  styleUrl: './search-screen.component.scss'
})
export class SearchScreenComponent implements OnInit {
  #apiService = inject(MlApiService);
  #route = inject(ActivatedRoute);
  public getProducts = signal< { results: Product[] } | null >(null);


  ngOnInit(): void {
    const categoryId = this.#route.snapshot.queryParamMap.get('categoryId');
    const searchInput = this.#route.snapshot.queryParamMap.get('q');
    this.#apiService.getProducts$(categoryId, searchInput)
      .subscribe({
        next: (next) => this.getProducts.set(next),
        error: (error) => console.log(error),
        complete: () => console.log('getProducts complete'),
    });
  }
}
