
// loading.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  constructor() {}

  setLoadingState(isLoading: boolean): void {
    this.isLoadingSubject.next(isLoading);
  }
}


// import { Injectable } from '@angular/core';
// import { Router, NavigationStart, NavigationEnd } from '@angular/router';
// import { Observable, BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoadingService {
//   private loadingSubject = new BehaviorSubject<boolean>(false);
//   isLoading$: Observable<boolean> = this.loadingSubject.asObservable();

//   constructor(private router: Router) {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationStart) {
//         this.loadingSubject.next(true);
//       } else if (event instanceof NavigationEnd) {
//         this.loadingSubject.next(false);
//       }
//     });
//   }

  
// }
