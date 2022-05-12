import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CartService } from 'src/app/Services/cart.service';
import { CategotyService } from 'src/app/Services/categoty.service';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Icart } from 'src/app/ViewModels/icart';
import { ICategory } from 'src/app/ViewModels/icategory';
import { ProductsComponent } from '../products/products.component';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit
{
  CartList:Icart[]=[];
  numberOfCartProducts:number=0;
  orderTotalPrice:number=0;
  @ViewChild(ProductsComponent) ProductsComponentObj!: ProductsComponent;

  constructor(private categoryService:CategotyService,
              private productService:ProductApiService,
              private cartService:CartService,
              private dialog:MatDialog) {
   }


  ngOnInit(): void {
    this.CartList= this.cartService.getCartProducts();
    this.numberOfCartProducts=this.CartList.length;
    this.CartList.forEach(product => {
     this.orderTotalPrice += product.ProductPrice*product.ProductCount;
     product.ProductTotalPrice = product.ProductPrice*product.ProductCount;

    });

  }

  removeFromCart(cartItem:Icart)
  {
    this.CartList.forEach((element,index)=>{
      if(element.ProductId == cartItem.ProductId)
      if (index > -1) {
        this.orderTotalPrice -= element.ProductPrice*element.ProductCount;
        this.CartList.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(this.CartList));

      }
   });
  }
  removeAllCartProducts()
  {
    this.CartList=[];
    localStorage.setItem("products", "");

  }

  updateCartProductTotalPrice(productId:Number,quantity:any)
  {
    console.log(quantity);
    this.orderTotalPrice=0;
    this.CartList.forEach(product => {
      if(product.ProductId==productId)
      {
        product.ProductCount=quantity;
        product.ProductTotalPrice = product.ProductPrice*quantity;
     }
     this.orderTotalPrice += product.ProductPrice*product.ProductCount;

     });
    localStorage.setItem("products", JSON.stringify(this.CartList));
  }

    makeOrder()
    {
      this.CartList.forEach(product => {
        this.productService.getProductByID(product.ProductId).subscribe(p=>{
          if(p.quantity>=product.ProductCount)
          {
            p.quantity-=product.ProductCount;
            if(confirm("confirm buying.."))
            {
              this.productService.updateProduct(product.ProductId,p).subscribe(res=>{
                  this.CartList=[];
                  localStorage.setItem("products", "");
              });
            }
          }else{
            const dialog=this.dialog.open(CartDialogComponent,{
              width:'300px',
              height:'125px',
            });
          }
        });
      });


    }


}
