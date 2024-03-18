import { Component, OnInit, inject, signal } from '@angular/core';
import { MlApiService } from '../../services/ml-api.service';
import { Category } from '../../interfaces/Category';
import { RouterLink } from '@angular/router';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [RouterLink, CategoryListComponent, SearchInputComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent implements OnInit {
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
