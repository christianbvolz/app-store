import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  #route = inject(ActivatedRoute);
  #fb = inject(FormBuilder);
  #router = inject(Router);


  public searchForm = this.#fb.group({
    searchInput: ['', [Validators.required, Validators.minLength(3)]],
  });

  public submit() {
    if (this.searchForm.valid) {
      const categoryId = this.#route.snapshot.queryParamMap.get('category');
      const limit = this.#route.snapshot.queryParamMap.get('limit') || 20;
      const condition = this.#route.snapshot.queryParamMap.get('condition');
      
      const searchInput = this.searchForm.value.searchInput;
      
      this.#router.navigate(['/search'], { queryParams: { page:1, limit, condition, category: categoryId, q: searchInput } });
    }
  }
}
