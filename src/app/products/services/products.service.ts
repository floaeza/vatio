import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({providedIn: 'root'})
export class ProductService {
  private apiUrl: string = 'http://dev.bbincovatio.com/api/get/products';
  constructor(private http: HttpClient) { }
  searchProductByModel( model:string ): Observable<Product[]>{
    const url = `${this.apiUrl}/bymodel`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + '1|ZXCL1D1NyCgtNGo3WfDPLqAvDZd2r9d30B3HXnTQ'
    });
    const formData = new FormData();
    formData.append('model',model);
    return this.http.post<Product[]>(url, formData, {headers})
          .pipe(
            catchError( () => of([]))
          );
  }
}