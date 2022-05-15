import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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
   token:any="";
  constructor(private cartService:CartService,private router:Router) {

   }


  ngOnInit(): void {
    this.CartList= this.cartService.getCartProducts();
      this.numberOfCartProducts=this.CartList.length;
    this.token=localStorage.getItem("token");
  }

  logout()
  {
    if(confirm("confirm logOut.."))
    {
      localStorage.setItem("token","");
      this.token=localStorage.getItem("token");
       this.router.navigate(['/login']);
    }
  }

}
