// translation.service.ts

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject: BehaviorSubject<string>;
  private languageDirectionMap: { [key: string]: string } = {
    'en': 'ltr', // English is left-to-right
    'fr': 'ltr', // French is left-to-right
    'ar': 'rtl'  // Arabic is right-to-left
    // Add more languages and their corresponding directions as needed
  };

  constructor(private translate: TranslateService) {
    this.currentLanguageSubject = new BehaviorSubject<string>(translate.currentLang);
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguageSubject.next(event.lang);
      this.changeDirection(this.languageDirectionMap[event.lang]);
    });
  }

  init(defaultLanguage: string) {
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage); // Set the default language
    this.changeDirection(this.languageDirectionMap[defaultLanguage]);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  getCurrentLanguage$() {
    return this.currentLanguageSubject.asObservable();
  }

  private changeDirection(dir: string) {
    document.dir = dir;
  }
}
