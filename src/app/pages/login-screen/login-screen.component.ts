import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss'
})
export class LoginScreenComponent {
  #fb = inject(FormBuilder);
  #router = inject(Router);
  

  public loginForm = this.#fb.group({
    userName: ['', [Validators.required, Validators.minLength(6)]],
    userPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  public submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.#router.navigate(['/']);
    }
  }
}
