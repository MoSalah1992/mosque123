import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { LoadingService } from './shared/services/loading.service';
import { TranslationService } from './shared/services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mosque';
  currentLanguage: string='';

  isLoading:boolean=false;
constructor(
  private AppService:AppService,
  private loadingService:LoadingService,
  private translationService: TranslationService
){
  
  // translate.setDefaultLang('en');
  // translate.use('en');

  // this.languageService.initLanguage();
  this.getAppSettings()

  this.loadingService.setLoadingState(false);
}
  ngOnInit(): void {

    this.translationService.init('en'); // Set 'en' as the default language

}


getAppSettings() {
    this.AppService.getAppSettings().subscribe({
      next: (data) => {
        
        setTimeout(() => {
          this.isLoading=true;
          this.loadingService.setLoadingState(true);

        }, 2000);
        if (data.length > 0) {
          this.AppService.setAppSettingsSlider(data);
         
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }


}
