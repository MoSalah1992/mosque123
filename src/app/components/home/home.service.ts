import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

getPrayerTimes() {
// http://api.aladhan.com/v1/calendarByCity/2024/2?city=London&country=United Kingdom&method=2

const currentDay=new Date();
const year =currentDay.getFullYear();
const month =currentDay.getMonth()+1;
const day =currentDay.getDate();

  return this.http.get(`${environment.prayerTimes}/${year}/${month}?city=Preston&country=United Kingdom&method=2`).pipe(
    map((response: any) => {
     


      return response;
    }),
    catchError((error) => {
      return throwError(() => error);
    })
  );
}

}
