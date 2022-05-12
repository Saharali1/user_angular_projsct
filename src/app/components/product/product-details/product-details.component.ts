import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private currPrdID:number=0;
  //private prdIDsList: number[]=[];
  currPrd:IProduct|undefined=undefined;
  constructor(private activatedRoute:ActivatedRoute,
              public dialogRef: MatDialogRef<ProductsComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any,
             private router: Router,
              private productApiservice:ProductApiService,
             private location: Location) {
               this.currPrdID=data.productId;
              }

  ngOnInit(): void {
    // this.currPrdID=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    this.productApiservice.getProductByID(this.currPrdID).subscribe(product=>{
      this.currPrd=product;
    });

    // this.prdIDsList=this.productApiservice.getAllProducts().subscribe(productList=>{
    //   this.prdIDsList=productList;
    // });
    // this.activatedRoute.paramMap.subscribe(paramMap=>{
    //   this.currPrdID=Number(paramMap.get("pid"));
    //   this.currPrd=this.prdService.getProductsByID(this.currPrdID);
    // });

  }

  goBack()
  {
    this.location.back();
  }

  // prevProduct()
  // {
  //   let currIndex=this.prdIDsList.findIndex((val)=>val==this.currPrdID);
  //   if(currIndex!=0)
  //   {
  //     this.currPrdID=this.prdIDsList[currIndex-1];
  //     this.router.navigate(['/Products', this.currPrdID]);
  //   }
  // }

  // nextProduct()
  // {
  //   let currIndex=this.prdIDsList.findIndex((val)=>val==this.currPrdID);
  //   if(currIndex<this.prdIDsList.length-1)
  //   {
  //     this.currPrdID=this.prdIDsList[currIndex+1];
  //     this.router.navigate(['/Products', this.currPrdID]);
  //   }

  // }

  // isFirstItem():boolean
  // {
  //   return this.currPrdID==this.prdIDsList[0];
  // }

  // islastItem():boolean
  // {
  //   return this.currPrdID==this.prdIDsList[this.prdIDsList.length-1];
  // }


}
