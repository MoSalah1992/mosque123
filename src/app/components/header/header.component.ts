import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy{
  currentLanguage: any;

  constructor(
    private translationService: TranslationService
  ) { 
   
  }

  ngOnInit() {
    this.translationService.getCurrentLanguage$().subscribe(language => {
      this.currentLanguage = language;
    });
  }


  changeLanguage(language: string) {
    this.translationService.changeLanguage(language);
  }

  ngOnDestroy() {
   
  }

}
