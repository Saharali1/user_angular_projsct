import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  loginUser(user: Ilogin): Observable<Iuser>
  {
        return this.httpClient.post<Iuser>(`${environment.ApiLocalURL}/Account/Login`,
                                             JSON.stringify(user),this.httpOptions);
  }
}
