import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { IRegester } from 'src/app/ViewModels/i-regester';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 user:IRegester={userName:"",password:"",email:""};
  constructor(private accountService:AccountService,
              private router:Router) { }

  ngOnInit(): void {
  }

  regester()
  {
    this.accountService.regesterUser(this.user).subscribe(res=>{
       this.router.navigate(['/login'])});
  }

}
