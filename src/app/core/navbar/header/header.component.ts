import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public cartCount:number=0;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
     this.productService.getCart().subscribe((cartData)=>
     {
      this.cartCount=cartData.length
      console.log(cartData);
     })
  }

}
