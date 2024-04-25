import { Component, inject, signal } from '@angular/core';
import { StoreApiService } from '../../services/store-api.service';
import { Category } from '../../interfaces/Category';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatMenuModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  #apiService = inject(StoreApiService);
  
  public getCategories = signal< [] | Category[] >([]);

  ngOnInit(): void {
    this.#apiService.getCategories$().subscribe({
      next: (next) => this.getCategories.set(next),
      error: (error) => console.log(error),
      complete: () => console.log('getCategories complete'),
    });
  }
}
