import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  AppSettingsSlider: any[]=[];

  constructor(private http: HttpClient) {}


  getAppSettings() {
  
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}AppSettings`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }


  setAppSettingsSlider(data: any) {
    this.AppSettingsSlider = data;
  }

  getAppSettingsSlider() {
    return this.AppSettingsSlider ;
  }
}
