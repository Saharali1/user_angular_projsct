import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private httpOptions;
  token:any=localStorage.getItem("token");
  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })}
  }
  getAllProducts(): Observable<IProduct[]>
  {
    // return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/products`)
    return this.httpClient.get<IProduct[]>(`${environment.ApiLocalURL}/product`)

  }

  getProductsByCatID(catID: number): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.ApiLocalURL}/product/CategoryProducts/${catID}`);
  }

  getProductByID(productId: number): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.ApiLocalURL}/product/${productId}`);
  }

  addNewProduct(product: IProduct): Observable<IProduct>
  {
    return this.httpClient.post<IProduct>(`${environment.ApiLocalURL}/product`,
                                             JSON.stringify(product),this.httpOptions);
  }

  updateProduct(prdID: number, product: IProduct):Observable<IProduct>
  {
    return this.httpClient.put<IProduct>(`${environment.ApiLocalURL}/product/${prdID}`,
    JSON.stringify(product),this.httpOptions);
  }

  deleteProduct(prdID:number)
  {
    return this.httpClient.delete<IProduct>(`${environment.ApiLocalURL}/product/${prdID}`,
    this.httpOptions);
  }
}
