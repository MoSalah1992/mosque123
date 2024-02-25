import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit,AfterViewInit {

  constructor(
  private appService:AppService,

  ) { }
  ngAfterViewInit(): void {
    
  }
  sliderImages:any[]=[]
  ngOnInit() {
    // var appSettingsSlider= this.appService.getAppSettingsSlider();
   
    
    this.sliderImages=[
      {name:'Home',imageURL:'./assets/image/slider/home.png',active:true},
      {name:'Video',imageURL:'./assets/image/slider/video.png',active:false},
      {name:'Video',imageURL:'./assets/image/slider/video2.png',active:false},
      {name:'Audio',imageURL:'./assets/image/slider/audio.png',active:false},
      {name:'Articles',imageURL:'./assets/image/slider/articles.png',active:false},
      {name:'Private Files',imageURL:'./assets/image/slider/privateFiles.png',active:false},
      {name:'Ramadan',imageURL:'./assets/image/slider/ramadan.png',active:false},
      {name:'Women',imageURL:'./assets/image/slider/women.png',active:false},
      {name:'Kids',imageURL:'./assets/image/slider/kids.png',active:false},
      {name:'Agaza',imageURL:'./assets/image/slider/agaza.png',active:false},
      {name:'Live Stream',imageURL:'./assets/image/slider/liveStream.png',active:false},
      {name:'Donate',imageURL:'./assets/image/slider/Donate.png',active:false},
    ]

    // this.getAppSettings()
  }

  getAppSettings() {
    this.appService.getAppSettings().subscribe({
      next: (data) => {
        
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const imageURL = data[key];
            this.sliderImages.push({ name: key, imageURL: imageURL });
          }
        }        // setTimeout(() => {
        //   this.isLoading=true;
        //   // this.loadingService.setLoadingState(true);

        // }, 2000);
        // if (data.length > 0) {
        //   this.AppService.setAppSettingsSlider(data);
         
        // }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

}
