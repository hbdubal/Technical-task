import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookDetails: any[] = [];
  cartItem: any[] = [];
  constructor(private productService: ProductService) {
    this.bookDetails = [
      { id: 1, bookname: "C++", imageName: "bookImage1", quantity: 0, price: 100 },
      { id: 2, bookname: "Angular", imageName: "bookImage2", quantity: 0, price: 300 },
      { id: 3, bookname: "Javascript", imageName: "bookImage3", quantity: 0, price: 80 },
      { id: 4, bookname: "Html", imageName: "bookImage4", quantity: 0, price: 150 }
    ]
  }

  ngOnInit(): void { }

  public addItem(book: any) {
    book.quantity += 1;
  }
  public removeItem(book: any) {
    if (book.quantity >= 1) {
      book.quantity -= 1;
    }
  }
  public addToCart(book: any) {
    if (book.quantity > 0) {
      const cartProduct = Object.assign({}, book)
      cartProduct.productPrice=book.price;
      const product = this.cartItem.find((cartItem) => cartProduct.id == cartItem.id);
      if (product) {
        product.quantity += cartProduct.quantity;
        product.price += cartProduct.quantity * cartProduct.price;
      } else {
        cartProduct.price *= cartProduct.quantity;
        this.cartItem.push(cartProduct);
      }

      this.productService.updateCart(this.cartItem)
      book.quantity = 0;
      console.log(this.cartItem);
    }
  }
}
