import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  getVideoHome() {
    // api/Video/VideoHome

    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}Video/VideoHome`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getVideoById(videoId:any) {
    // api/Video/VideoHome

    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}Video/${videoId}`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
  addVideoViews(videoId:any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.post(`${environment.api}Video/AddView?id=${videoId}`,null, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  // getEventVideo(mediaSettings: any) {
  //   const headers = new HttpHeaders().set(
  //     'Content-Type',
  //     'text/plain; charset=utf-8'
  //   );

  //   let queryParams = new HttpParams();

  //   queryParams = queryParams.append('EventAudio', mediaSettings);

  //   return this.http.get(`${environment.api}EventVideo`, { headers }).pipe(
  //     map((response: any) => {
  //       return response;
  //     }),
  //     catchError((error) => {
  //       return throwError(() => error);
  //     })
  //   );
  // }

  getAudioHome() {
    // api/Audio/VideoHome

    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}audio/audioHome`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getEventAudio(mediaSettings: any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    let queryParams = new HttpParams();

    queryParams = queryParams.append('EventAudio', mediaSettings);

    return this.http.get(`${environment.api}EventAudio`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  addAudioViews(audioId:any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.post(`${environment.api}Audio/AddView?id=${audioId}`,null, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getMediaType() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}MediaType`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getSeries() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}Series`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getThread() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}Thread`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getLecturer() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}Lecturer`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getArticles(
    mediaQuery:any
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
 


    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}article`, { headers,params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getBooks(
    pageIndex?: number,
    pageSize?: number,
    OrderBy?: any,
    OrderDirection?: any,
    Trim?: any,
  ) : Observable<any> {
    let params = new HttpParams();
    if (pageIndex !== undefined) {
      params = params.set('pageIndex', pageIndex.toString());
    }
    if (pageSize !== undefined) {
      params = params.set('pageSize', pageSize.toString());
    }

    if (OrderBy !== undefined) {
      params = params.set('OrderBy', OrderBy.toString());
    }

    if (OrderDirection !== undefined) {
      params = params.set('OrderDirection', OrderDirection.toString());
    }

    if (Trim !== undefined) {
      params = params.set('Trim', Trim.toString());
    }




    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}Book`, { headers,params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  /**
    pageIndex?: number,
    pageSize?: number,
    OrderBy?: any,
    OrderDirection?: any,
    Trim?: any,
    PrivateFileId?: any,
    ThreadId?: any,
    MediaTypeId?: any,
    SeriesId?: any,
    LecturerId?: any,
   */
  getVideos(
    mediaQuery:any

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

    if (mediaQuery.MediaTypeId !== undefined) {
      params = params.set('MediaTypeId', mediaQuery.MediaTypeId.toString());
    }

    if (mediaQuery.SeriesId !== undefined) {
      params = params.set('SeriesId', mediaQuery.SeriesId.toString());
    }
    
    if (mediaQuery.LecturerId !== undefined) {
        params = params.set('LecturerId', mediaQuery.LecturerId.toString());
      }

    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}Video`, { headers,params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getAudios(
    mediaQuery:any

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

    if (mediaQuery.MediaTypeId !== undefined) {
      params = params.set('MediaTypeId', mediaQuery.MediaTypeId.toString());
    }

    if (mediaQuery.SeriesId !== undefined) {
      params = params.set('SeriesId', mediaQuery.SeriesId.toString());
    }
    
    if (mediaQuery.LecturerId !== undefined) {
        params = params.set('LecturerId', mediaQuery.LecturerId.toString());
      }

    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}Audio`, { headers,params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getCards(
    pageIndex?: number,
    pageSize?: number,
    OrderBy?: any,
    OrderDirection?: any,
    Trim?: any,
    PrivateFileId?: any,
    

  ) : Observable<any> {
    let params = new HttpParams();
    if (pageIndex !== undefined) {
      params = params.set('pageIndex', pageIndex.toString());
    }
    if (pageSize !== undefined) {
      params = params.set('pageSize', pageSize.toString());
    }

    if (OrderBy !== undefined) {
      params = params.set('OrderBy', OrderBy.toString());
    }

    if (OrderDirection !== undefined) {
      params = params.set('OrderDirection', OrderDirection.toString());
    }

    if (Trim !== undefined) {
      params = params.set('Trim', Trim.toString());
    }

    if (PrivateFileId !== undefined) {
      params = params.set('PrivateFileId', PrivateFileId.toString());
    }


    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}card`, { headers,params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }



  getLiveStream() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}LiveStream`, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getNews(
    pageIndex?: number,
    pageSize?: number,
    OrderBy?: any,
    OrderDirection?: any,
    Trim?: any,
    NewsTypeId?: any
  ): Observable<any> {
    let params = new HttpParams();
    if (pageIndex !== undefined) {
      params = params.set('pageIndex', pageIndex.toString());
    }
    if (pageSize !== undefined) {
      params = params.set('pageSize', pageSize.toString());
    }

    if (OrderBy !== undefined) {
      params = params.set('OrderBy', OrderBy.toString());
    }

    if (OrderDirection !== undefined) {
      params = params.set('OrderDirection', OrderDirection.toString());
    }

    if (Trim !== undefined) {
      params = params.set('Trim', Trim.toString());
    }

    if (NewsTypeId !== undefined) {
      params = params.set('NewsTypeId', NewsTypeId.toString());
    }

    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(`${environment.api}news`, { headers,params }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getFatwa(
    pageIndex?: number,
    pageSize?: number,
    OrderBy?: any,
    OrderDirection?: any,
    Trim?: any,
    PrivateFileId?: any,
    ThreadId?: any

  ): Observable<any> {
    let params = new HttpParams();
    if (pageIndex !== undefined) {
      params = params.set('pageIndex', pageIndex.toString());
    }
    if (pageSize !== undefined) {
      params = params.set('pageSize', pageSize.toString());
    }

    if (OrderBy !== undefined) {
      params = params.set('OrderBy', OrderBy.toString());
    }

    if (OrderDirection !== undefined) {
      params = params.set('OrderDirection', OrderDirection.toString());
    }

    if (Trim !== undefined) {
      params = params.set('Trim', Trim.toString());
    }

    if (PrivateFileId !== undefined) {
      params = params.set('PrivateFileId', PrivateFileId.toString());
    }
    if (ThreadId !== undefined) {
        params = params.set('ThreadId', ThreadId.toString());
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

  addNewsViews(newsId:any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.post(`${environment.api}News/AddView?id=${newsId}`,null, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  addArticleViews(articleId:any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.post(`${environment.api}Article/AddView?id=${articleId}`,null, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
