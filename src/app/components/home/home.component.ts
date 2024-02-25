import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MediaService } from '../media/media.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from './home.service';
import { DatePipe } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FatwaService } from '../fatwa/fatwa.service';

export interface PrayerTime {
  id: any,
  name: any,      
  icon: any,
  AzanTime: any,
  PrayerTime: any
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent implements OnInit {
  allSalat: any[] = [];

  leastNews: any[] = [];
  leastFatwa: any[] = [];
  selectedButton: string = 'articles';
  leastSelected: any[] = [];
  prayerTimes: any[] = [];

  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;
  @ViewChild('audioSource') audioSourceRef!: ElementRef;
  constructor(
    private mediaService: MediaService,
    private domSanitizer: DomSanitizer,
    private homeService: HomeService,
    private fatwaService:FatwaService
  ) {}

  ngOnInit() {
    this.getPrayerTimes();
    this.getLeastNews();
    this.getLeastFatwa();
    this.selectButton(this.selectedButton);

    this.allSalat = [];
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    // nav: true,
    nav: true,
  
     navText: ['<i class=\'fa fa-chevron-left\'></i>', '<i class=\'fa fa-chevron-right\'></i>'] ,
      responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }
  
  selectButton(button: string) {
    this.selectedButton = button;
    switch (button) {
      case 'articles':
        this.callLeastArticles();
        break;
      case 'books':
        this.callLeastBooks();
        break;
      case 'video':
        this.callLeastVideo();
        break;
      case 'audio':
        this.callLeastAudio();
        break;
      case 'cards':
        this.callLeastInvitation();
        break;
      default:
        break;
    }
  }

  callLeastArticles() {
    // Implement your logic for the "New Articles" button here
    this.mediaService.getArticles({pageSize:4}).subscribe({
      next: (data) => {
        if (data.length > 0) {
          
          this.leastSelected = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  callLeastBooks() {
    // Implement your logic for the "New Books" button here
    this.mediaService.getBooks(undefined, 4).subscribe({
      next: (data) => {
        if (data.length > 0) {
          
          this.leastSelected = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  callLeastVideo() {
    // Implement your logic for the "New Video" button here
    this.mediaService.getVideos({pageSize:4}).subscribe({
      next: (data) => {
        if (data.length > 0) {
          
          this.leastSelected = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  callLeastAudio() {
    // Implement your logic for the "New Audio" button here
    this.mediaService.getAudios({pageSize:4}).subscribe({
      next: (data) => {
        if (data.length > 0) {
          
          this.leastSelected = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  callLeastInvitation() {
    // Implement your logic for the "New Invitation Cards" button here
    this.mediaService.getCards(undefined, 4).subscribe({
      next: (data) => {
        if (data.length > 0) {
          
          this.leastSelected = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getLeastNews() {
    this.mediaService.getNews(undefined, 4).subscribe({
      next: (data) => {
        if (data.length > 0) {
          
          this.leastNews = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getLeastFatwa() {
    this.mediaService.getFatwa(undefined, 5).subscribe({
      next: (data) => {
        if (data.length > 0) {
          
          this.leastFatwa = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  playAudio(audioUrl: string): void {
    const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
    const audioSource = this.audioSourceRef.nativeElement as HTMLSourceElement;

    audioSource.src = audioUrl;
    audioPlayer.load();
    audioPlayer.play();
  }

  getPrayerTimes() {
    const currentDay = new Date().getDate();
    

    this.homeService.getPrayerTimes().subscribe({
      next: (response) => {
        if (response.code == 200 && response.data.length > 0) {
          const NextFriday = {
            ...response.data[this.getNextFriday().getDate() - 1],
          };

          const currentPrayerDate = { ...response.data[currentDay - 1] };
          
          this.prayerTimes = [
            {
              id: '1',
              name: 'Fajr',
              icon: 'Fajr.png',
              AzanTime: this.time12Hour(currentPrayerDate.timings.Fajr),
              PrayerTime: this.incrementTime(this.time12Hour(currentPrayerDate.timings.Fajr),20),
            },
            {
              id: '2',
              name: 'Zuhr',
              icon: 'Clock.png',
              AzanTime: this.time12Hour(currentPrayerDate.timings.Dhuhr),
              PrayerTime: this.incrementTime(this.time12Hour(currentPrayerDate.timings.Dhuhr),15),
            },
            {
              id: '3',
              name: 'Asr',
              icon: 'Asr.png',
              AzanTime: this.time12Hour(currentPrayerDate.timings.Asr),
              PrayerTime: this.incrementTime(this.time12Hour(currentPrayerDate.timings.Asr),15),
            },
            {
              id: '4',
              name: 'Sunsut',
              icon: 'Sea.png',
              AzanTime: this.time12Hour(currentPrayerDate.timings.Maghrib),
              PrayerTime: this.incrementTime(this.time12Hour(currentPrayerDate.timings.Maghrib),5),
            },
            {
              id: '5',
              name: 'Isha',
              icon: 'Isha.png',
              AzanTime: this.time12Hour(currentPrayerDate.timings.Isha),
              PrayerTime: this.incrementTime(this.time12Hour(currentPrayerDate.timings.Isha),15),
            },
            // {
            //   id: '6',
            //   name: 'Juma',
            //   icon: 'islamic-friday-prayer.png',
            //   AzanTime: this.time12Hour(NextFriday.timings.Dhuhr),
            //   PrayerTime: this.incrementTime(this.time12Hour(currentPrayerDate.timings.Dhuhr),30),
            // },
          ];

          // this.prayerTimes=data.data.filter((item:any)=>item.date.readable==currentDay)

          
          
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  time12Hour(time24Hour: any) {
    let currentTimeString = time24Hour.replace(' (GMT)', '');
    let currentDate = new Date();
    let [hours, minutes] = currentTimeString.split(':');

    currentDate.setHours(parseInt(hours));
    currentDate.setMinutes(parseInt(minutes));
    // const time12Hour = new DatePipe('en-US').transform(time24Hour.replace(" (GMT)", ""), 'h:mm a');
    
    return currentDate;
  }

  incrementTime(timeString: any, incrementMinutes: number = 0): string {
    const currentDate = new Date(timeString);
    currentDate.setMinutes(currentDate.getMinutes() + incrementMinutes);

    const options:any = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const formattedTime = currentDate.toLocaleString('en-US', options);

    return formattedTime;
}

  getNextFriday(): Date {
    const today = new Date();
    const currentDay = today.getDay();
    const daysUntilNextFriday =
      currentDay <= 5 ? 5 - currentDay : 5 + (7 - currentDay);
    const nextFriday = new Date(
      today.getTime() + daysUntilNextFriday * 24 * 60 * 60 * 1000
    );
    return nextFriday;
  }
  increaseTimeByIncrement(timeString: string, incrementMinutes: number): string {
    // Extract hours, minutes, and period (AM/PM) from the time string
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(str => parseInt(str.trim(), 10));

    // Adjust hours for AM/PM format
    let adjustedHours = hours;
    if (period === 'PM' && hours !== 12) {
      adjustedHours += 12;
    } else if (period === 'AM' && hours === 12) {
      adjustedHours = 0;
    }

    // Create a new Date object and set hours and minutes
    const currentTime = new Date();
    currentTime.setHours(adjustedHours, minutes);

    // Add increment minutes
    currentTime.setMinutes(currentTime.getMinutes() + incrementMinutes);

    // Get updated hours and minutes
    const updatedHours = currentTime.getHours() % 12 || 12;
    const updatedMinutes = currentTime.getMinutes();

    // Determine the period (AM/PM) for the updated time
    const updatedPeriod = currentTime.getHours() < 12 ? 'AM' : 'PM';

    // Format the updated time
    const formattedTime = `${updatedHours} : ${updatedMinutes.toString().padStart(2, '0')} ${updatedPeriod}`;

    return formattedTime;
  }


  getTruncatedDescription(description: any): string {
    return description.substring(0, 100) + '...';
  }
  fullDescriptionSelected: any = {};

  fullDescription(fatwa: any) {
    
    this.fullDescriptionSelected = fatwa;

    this.addFatwaViews(fatwa.id);
  }

  addFatwaViews(fatwaId: any) {
    this.fatwaService.addFatwaViews(fatwaId).subscribe({
      next: (data) => {
      
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  handleCloseFatwa(fatwa: any) {
    this.getLeastFatwa();

    console.log('Close button clicked');
    // You can put any logic here that you want to execute when the close button is clicked
  }

}
