import { Component, inject, signal } from '@angular/core';
import { MlApiService } from '../../services/ml-api.service';
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
  #apiService = inject(MlApiService);
  public getCategories = signal< null | Category[] >(null);

  ngOnInit(): void {
    this.#apiService.getCategories$().subscribe({
      next: (next) => this.getCategories.set(next),
      error: (error) => console.log(error),
      complete: () => console.log('getCategories complete'),
    });
  }
}
