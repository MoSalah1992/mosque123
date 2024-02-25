import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrivateFilesService {

  constructor(
    private http: HttpClient

    ) {}

getPrivateFile(settings: any) {
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

  let queryParams = new HttpParams();
        
    queryParams = queryParams.append('EventAudio', settings);

  return this.http.get(`${environment.api}PrivateFile`,{headers}).pipe(
      map((response: any) => {
          return response;
      }),
      catchError((error) => {
          return throwError(() => error);
      })
  );
}


getPrivateFileByid(fileId: any) {
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

  return this.http.get(`${environment.api}PrivateFile/${fileId}`,{headers}).pipe(
      map((response: any) => {
          return response;
      }),
      catchError((error) => {
          return throwError(() => error);
      })
  );
  
}






}
