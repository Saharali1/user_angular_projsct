import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRegester } from '../ViewModels/i-regester';
import { Ilogin } from '../ViewModels/ilogin';
import { Iuser } from '../ViewModels/iuser';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private httpOptions;
  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })}
   }

  loginUser(user: Ilogin): Observable<Ilogin>
  {
        return this.httpClient.post<Ilogin>(`${environment.ApiLocalURL}/Account/Login`,
                                             JSON.stringify(user),this.httpOptions);
  }

  regesterUser(user: IRegester): Observable<IRegester>
  {
        return this.httpClient.post<IRegester>(`${environment.ApiLocalURL}/Account/RegisterUser`,
                                             JSON.stringify(user),this.httpOptions);
  }
}
