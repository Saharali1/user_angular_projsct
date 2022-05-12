import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategotyService } from 'src/app/Services/categoty.service';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  catList:ICategory[]=[];
  productId:number=0;
  constructor(private productservice:ProductApiService,
                        private router:Router, private categoryService:CategotyService,
                        private activatedRoute:ActivatedRoute)
  {
    this.categoryService.getAllCategories().subscribe(categories=>{
      this.catList=categories;
    });

  }
  product:IProduct={"name":"","quantity":0,"price":0,"img":"","cateogryID":0,id:0};

  ngOnInit(): void {
    this.productId=Number(this.activatedRoute.snapshot.paramMap.get("productId"));
    this.productservice.getProductByID(this.productId).subscribe(product=>{
        this.product=product;
    });

  }


  addProduct()
  {
    if(this.productId==0)
    {
      this.productservice.addNewProduct(this.product).subscribe(product=>{
        this.router.navigate(['/cart']);
      });
    }else
    {
      this.productservice.updateProduct(this.productId,this.product).subscribe(product=>{
        this.router.navigate(['/cart']);
      });
    }
  }

  onselectImg(e:any)
  {
    if(e.target.files){
      var readaer=new FileReader();
      readaer.readAsDataURL(e.target.files[0]);
      readaer.onload=(event:any)=>{
        this.product.img= event.target.result;
      }
    }
  }
}
