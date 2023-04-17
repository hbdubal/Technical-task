import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProduct: any = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCart().subscribe((cartData) => {
      // console.log(cartData);
      if (cartData.length !== 0) {
        this.cartProduct = cartData;
        console.log(cartData);

      }
    })
  }
  public addProduct(product: any) {
    product.quantity += 1;
    product.price = product.productPrice * product.quantity;
  }
  public removeProduct(product: any, index: any) {
    product.quantity -= 1;
    if (product.quantity == 0) {
      this.cartProduct.splice(index, 1);
    }
    else {
      product.price = product.productPrice * product.quantity;
    }
  }
  
  public deleteProduct(product:any,index:any)
  {
      this.cartProduct.splice(index, 1);
  }

}