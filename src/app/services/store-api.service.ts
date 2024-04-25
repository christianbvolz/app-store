import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../interfaces/Category';
import { Product } from '../interfaces/Product';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {
  #http = inject(HttpClient);
  
  public getCategories$ = (): Observable<Category[]> =>
    this.#http.get<Category[]>(environment.baseUrl + '/categories');

  public getProduct$ = (productId: string): Observable<Product> => {
    const urlWithId = environment.baseUrl + `/products/${productId}`;
    
    return this.#http.get<Product>(urlWithId);
  }

  public getSearchProductsList$ = 
    (page: string, limit: string, categoryId?: string, searchInput?: string, condition?: string): Observable<Product[]> => {
      
      const searchUrl: URL = new URL(environment.baseUrl + '/products');
      searchUrl.searchParams.set('page', page);
      searchUrl.searchParams.set('limit', limit);
      if (categoryId) searchUrl.searchParams.set('category', categoryId);
      if (searchInput) searchUrl.searchParams.set('q', searchInput);
      if (condition) searchUrl.searchParams.set('condition', condition);
      
      return this.#http.get<Product[]>(searchUrl.toString());
  }
}
