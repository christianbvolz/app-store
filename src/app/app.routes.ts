import { Routes } from '@angular/router';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { ProductDetailsScreenComponent } from './pages/product-details-screen/product-details-screen.component';
import { SearchScreenComponent } from './pages/search-screen/search-screen.component';
import { CartScreenComponent } from './pages/cart-screen/cart-screen.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Store',
    component: HomeScreenComponent
  },
  {
    path: 'login',
    title: 'Login page',
    component: LoginScreenComponent
  },
  {
    path: 'search',
    title: 'Search page',
    component: SearchScreenComponent
  },
  {
    path: 'product/:id',
    title: 'Product page',
    component: ProductDetailsScreenComponent
  },
  {
    path: 'cart',
    title: 'Cart page',
    component: CartScreenComponent
  }
];
