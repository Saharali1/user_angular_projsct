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
export class ProductsComponent implements OnInit ,OnChanges{

    myStore:Store;
    CartProduct:Icart;
    categoryList:ICategory[]=[];
    ProductList:IProduct[]=[];
    url:string="";
    selectedCategoryID=0;
    CartList:Icart[]=[]
    @Input() receivedSelCatID:number=0;
    @Output() onAddToCart:EventEmitter<Icart>;

  constructor(private productapiservice:ProductApiService,private router:Router,
      private categoryService:CategotyService,
      private cartService:CartService,
      private dialog:MatDialog)
  {
    this.onAddToCart=new EventEmitter<Icart>();
    this.myStore={
      name:"shopingMinya",
      branches:["minya","assuit"],
      logo:"assets/icons/logo-01.png"
    }
    this.CartProduct={ProductName:"",ProductPrice:0,ProductCount:0,ProductImg:"",ProductId:0,
                              ProductTotalPrice:0};
  }

   newProductList:any=[];
  ngOnChanges(changes: SimpleChanges): void
  {
    if(this.receivedSelCatID==0)
    {
      this.productapiservice.getAllProducts().subscribe(pl=>{
        this.newProductList=pl;
      });
    }else
    {
      this.productapiservice.getProductsByCatID(this.receivedSelCatID).subscribe(pl=>{
        this.newProductList=pl;
      });
    }

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
      console.log(pl);
      this.categoryList=pl;
    });

    this.productapiservice.getAllProducts().subscribe(pl=>{
      this.ProductList=pl;
    });

    this.productapiservice.getAllProducts().subscribe(pl=>{
      let x=pl;
      for (let index = 0; index < x.length; index++) {
        if(x[index].quantity>0)
        {
          this.newProductList.push(x[index]);
          console.log(this.newProductList[index].quantity);
        }
      }
    });
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

  decreaseQuentity(id:any)
  {
    console.log(id);

    this.ProductList.forEach(function(obj) {
      if (obj.id == id && obj.quantity>0) {
          obj.quantity=obj.quantity-1;

      }
  });
  }

  EditProduct(productid:number)
  {
    this.router.navigate(['/EditProduct',productid]);
  }

  DeleteProduct(productId:number)
  {
    if(confirm("Are you sure to delete this product ")) {
      this.productapiservice.deleteProduct(productId).subscribe(product=>{
        console.log("deleted...");
      });
    }

    if(this.receivedSelCatID==0)
    {
      this.productapiservice.getAllProducts().subscribe(pl=>{
        this.newProductList=pl;
      });
    }else
    {
      this.productapiservice.getProductsByCatID(this.receivedSelCatID).subscribe(pl=>{
        this.newProductList=pl;

      });

  }
}

categoryChanged(catId:any)
{
  console.log(catId);
  if(catId==0)
  {
    this.productapiservice.getAllProducts().subscribe(pl=>{
      this.newProductList=pl;
    });
  }else
  {
    this.productapiservice.getProductsByCatID(catId).subscribe(pl=>{
      this.newProductList=pl;
    });

  }
 }


}
