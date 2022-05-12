import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Icart } from 'src/app/ViewModels/icart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   CartList:any=[];
   numberOfCartProducts:number=0;

  constructor(private cartService:CartService) {

   }


  ngOnInit(): void {
    this.CartList= this.cartService.getCartProducts();
      this.numberOfCartProducts=this.CartList.length;
  }


}
