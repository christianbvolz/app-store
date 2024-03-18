import { Routes } from '@angular/router';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { ProductDetailsScreenComponent } from './pages/product-details-screen/product-details-screen.component';
import { SearchScreenComponent } from './pages/search-screen/search-screen.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'login',
    component: LoginScreenComponent
  },
  {
    path: 'search',
    component: SearchScreenComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsScreenComponent
  }
];
