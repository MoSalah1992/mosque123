import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(settings: any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    let queryParams = new HttpParams();

    queryParams = queryParams.append('Events', settings);

    return this.http.get(`${environment.api}Event`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getEventsbyId(eventId: any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http
      .get(`${environment.api}Event/${eventId}`, { headers })
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
