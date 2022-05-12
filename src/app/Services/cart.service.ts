import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icart } from '../ViewModels/icart';
import { ICategory } from '../ViewModels/icategory';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private categoryList:ICategory[]=[];
cartProductsList:Icart[]=[];
  constructor() {
      }


  addToCart(product:Icart)
  {
    this.cartProductsList= JSON.parse(localStorage.getItem("products") || "[]");
    this.cartProductsList.push({ProductName:product.ProductName,ProductPrice:product.ProductPrice,
      ProductCount:product.ProductCount,ProductImg:product.ProductImg,ProductId:product.ProductId,
    ProductTotalPrice:product.ProductTotalPrice});
    localStorage.setItem("products", JSON.stringify(this.cartProductsList));
  }

  getCartProductslength():Observable<Icart>
  {
    return JSON.parse(localStorage.getItem("products") || "[]");
  }

  getCartProducts()
  {
    return JSON.parse(localStorage.getItem("products") || "[]");
  }
}
