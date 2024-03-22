import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from '../../interfaces/Product';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-checkout-screen',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './checkout-screen.component.html',
  styleUrl: './checkout-screen.component.scss'
})
export class CheckoutScreenComponent implements OnInit {
  #router = inject(Router);
  #fb = inject(FormBuilder);
  getCart = signal<CartProduct[] | []>([]);

  addressFormGroup = this.#fb.group({
    fullName: ['', Validators.required],
    cpf: ['', Validators.required],
    address: ['', Validators.required],
  });
  shippingFormGroup = this.#fb.group({
    shippingOption: ['', Validators.required],
  });
  paymentFormGroup = this.#fb.group({
    paymentMethod: ['', Validators.required],
  });

  isLinear = true;

  ngOnInit(): void {
    this.getCart.set(history.state);
  }

  goToPurchaseDetails(): void {
    this.#router.navigate(['/']);
  }
}
