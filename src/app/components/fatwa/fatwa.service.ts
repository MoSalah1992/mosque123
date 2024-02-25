import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FatwaService {

  constructor(private http: HttpClient) {}



  getFatwas(
    mediaQuery:any
    // pageIndex?: number,
    // pageSize?: number,
    // OrderBy?: any,
    // OrderDirection?: any,
    // Trim?: any,
    // PrivateFileId?: any,
    // ThreadId?: any,

  ) : Observable<any> {
    let params = new HttpParams();
    if (mediaQuery.pageIndex !== undefined) {
      params = params.set('pageIndex', mediaQuery.pageIndex.toString());
    }
    if (mediaQuery.pageSize !== undefined) {
      params = params.set('pageSize', mediaQuery.pageSize.toString());
    }

    if (mediaQuery.OrderBy !== undefined) {
      params = params.set('OrderBy', mediaQuery.OrderBy.toString());
    }

    if (mediaQuery.OrderDirection !== undefined) {
      params = params.set('OrderDirection', mediaQuery.OrderDirection.toString());
    }

    if (mediaQuery.Trim !== undefined) {
      params = params.set('Trim', mediaQuery.Trim.toString());
    }

    if (mediaQuery.PrivateFileId !== undefined) {
      params = params.set('PrivateFileId', mediaQuery.PrivateFileId.toString());
    }

    if (mediaQuery.ThreadId !== undefined) {
      params = params.set('ThreadId', mediaQuery.ThreadId.toString());
    }

    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}Fatwa`, { headers,params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  addFatwaViews(fatwaId:any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.post(`${environment.api}Fatwa/AddView?id=${fatwaId}`,null, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }


}
