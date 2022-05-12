import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModels/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategotyService {

  constructor(private httpClient:HttpClient) { }
  getAllCategories(): Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>(`${environment.ApiLocalURL}/category`)
  }
}
