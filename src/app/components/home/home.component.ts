import { Component, OnInit } from '@angular/core';
import { CategotyService } from 'oldProject before lazy loading/src/app/Services/categoty.service';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductsService } from 'src/app/Services/products.service';
import { ICategory } from 'src/app/ViewModels/icategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories:ICategory[];
  constructor(private categoryService:CategotyService,private ProductsService:ProductApiService) {
    this.categories=[];
   }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res=>{
      this.categories=res;
    });
  }

  setCategoryId(catId:number)
  {
    this.ProductsService.setCategoryId(catId);
  }

}
