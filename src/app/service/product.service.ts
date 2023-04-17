import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cart = new BehaviorSubject([]);

  constructor() { }
  public updateCart(products: any) {
    this.cart.next(products);
  }
  public getCart() {
    return this.cart.asObservable();
  }
}
