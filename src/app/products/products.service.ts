import { Injectable } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../product/product.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = new BehaviorSubject<Product[]|null>(null)
  products$ = this.products.asObservable()
  
  constructor(private httpClient: HttpClient) { }

  getProducts() {
    this.httpClient.get<Product[]>(environment.apiHost + '/api/products')
      .pipe(first())
      .subscribe(results => this.products.next(results))
  }
  
}
