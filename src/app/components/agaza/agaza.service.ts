import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgazaService {

  constructor(private http: HttpClient) {}


  getEgazaCategories() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.get(`${environment.api}EgazaRequest/getEgazaCategories`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getEgazaSubcategories(categoryId:any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    let params = new HttpParams();
    
        if (categoryId !== undefined) {
          params = params.set('categoryId', categoryId.toString());
        }
    return this.http.get(`${environment.api}EgazaRequest/getEgazaSubcategories`, { headers,params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getEgazaSheikh(subCategoryId:any) {

    
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    let params = new HttpParams();
    
        if (subCategoryId !== undefined) {
          params = params.set('subcategoryId', subCategoryId.toString());
        }
    return this.http.get(`${environment.api}EgazaRequest/getEgazaSheikh`, { headers,params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  EgazaRequest(requestData:any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    let params = new HttpParams();

    if (requestData.userName !== undefined) {
      params = params.set('Name', requestData.userName.toString());
    }
    if (requestData.phone !== undefined) {

      params = params.set('Phone1', requestData.phone.e164Number.toString());
    }

    if (requestData.Phone2 !== undefined) {

      params = params.set('Phone2', requestData.Phone2.toString());
    }

    if (requestData.email !== undefined) {

      params = params.set('Email', requestData.email.toString());
    }

    if (requestData.age !== undefined) {

      params = params.set('Age', requestData.age.toString());
    }

    if (requestData.city !== undefined) {

      params = params.set('City', requestData.city.toString());
    }
    if (requestData.gender !== undefined) {

      params = params.set('Gender', requestData.gender.toString());
    }

    if (requestData.agazaSheikh !== undefined) {

      params = params.set('EgazaSheikhId', requestData.agazaSheikh.toString());
    }
    if (requestData.agazaSubType !== undefined) {

      params = params.set('EgazaSubcategoryId', requestData.agazaSubType.toString());
    }
    if (requestData.Notes !== undefined) {

      params = params.set('Notes', requestData.Notes.toString());
    }


    return this.http.post(`${environment.api}EgazaRequest`,null, { headers,params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

}
