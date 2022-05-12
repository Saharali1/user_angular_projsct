import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IsendedOrder } from '../ViewModels/isended-order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private httpOptions;
  token:any=localStorage.getItem("token");
  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })}
}




  addNewOrder(order: IsendedOrder): Observable<IsendedOrder>
  {
    return this.httpClient.post<IsendedOrder>(`${environment.ApiLocalURL}/order`,
                                             JSON.stringify(order),this.httpOptions);
  }


}
