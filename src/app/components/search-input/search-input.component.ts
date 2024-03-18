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
      const categoryId = this.#route.snapshot.queryParamMap.get('categoryId');
      const searchInput = this.searchForm.value.searchInput;
      this.#router.navigate(['/search'], { queryParams: { category: categoryId, q: searchInput }});
    }
  }
}
