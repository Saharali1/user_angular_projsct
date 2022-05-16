import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { CategotyService } from 'src/app/Services/categoty.service';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { Icart } from 'src/app/ViewModels/icart';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Store } from 'src/app/ViewModels/store';
import { CartDialogChickOutComponent } from '../cart-dialog-chick-out/cart-dialog-chick-out.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    CartProduct:Icart;
    categoryList:ICategory[]=[];
    ProductList:IProduct[]=[];
    CartList:Icart[]=[]

  constructor(private productapiservice:ProductApiService,private router:Router,
      private categoryService:CategotyService,
      private cartService:CartService,
      private dialog:MatDialog)
  {
    this.CartProduct={ProductName:"",ProductPrice:0,ProductCount:0,ProductImg:"",ProductId:0,
                              ProductTotalPrice:0};
  }


  updateCart(count:number,product:IProduct)
  {
    let cartproductMatching=false;
    this.CartList= this.cartService.getCartProducts();
    this.CartList.forEach(element => {
      if(element.ProductId==product.id)
      {
        cartproductMatching=true;
      }
    });
    if(cartproductMatching==false)
    {
      this.CartProduct.ProductName=product.name;
      this.CartProduct.ProductPrice=product.price;
      this.CartProduct.ProductCount=count;
      this.CartProduct.ProductImg=product.img;
      this.CartProduct.ProductId=product.id;
      this.cartService.addToCart(this.CartProduct);
      this.dialog.open(CartDialogChickOutComponent,{
        width:'500px',
        height:'125px',
        });
    }

  }
  ngOnInit(): void
  {
    this.categoryService.getAllCategories().subscribe(pl=>{
      this.categoryList=pl;
    });
    if(this.productapiservice.getCategoryId()==0)
    {
      this.productapiservice.getAllProducts().subscribe(pl=>{
        this.ProductList=pl;
      });
    }else{
      this.productapiservice.getProductsByCatID(this.productapiservice.getCategoryId()).subscribe(pl=>{
        this.ProductList=pl;
      });
    }

  }

  openProductDetails(pid:number)
  {
    const dialog=this.dialog.open(ProductDetailsComponent,{
      width:'500px',
      height:'1000px',
      data:{
        productId:pid
      }
    });
    // this.router.navigate(['/Products',pid]);
  }
categoryChanged(catId:any)
{
  if(catId==0)
  {
    this.productapiservice.getAllProducts().subscribe(pl=>{
      this.ProductList=pl;
    });
  }else
  {
    this.productapiservice.getProductsByCatID(catId).subscribe(pl=>{
      this.ProductList=pl;
    });

  }
 }


}
