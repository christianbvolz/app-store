import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  #fb = inject(FormBuilder);
  #router = inject(Router);

  public searchForm = this.#fb.group({
    searchInput: ['', [Validators.required, Validators.minLength(3)]],
  });

  public submit() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      this.#router.navigate(['/search', { q: this.searchForm.value.searchInput}]);
    }
  }
}
