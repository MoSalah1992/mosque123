import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FoodParcleService {
http: any;

constructor() { }


foodParcleRequest(requestData:any) {
  
  const headers = new HttpHeaders().set(
    'Content-Type',
    'text/plain; charset=utf-8'
  );
 
  return this.http.post(`${environment.api}FoodDonation`,requestData, { headers }).pipe(
    map((response: any) => {
      return response;
    }),
    catchError((error) => {
      return throwError(() => error);
    })
  );
}



}
