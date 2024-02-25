import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { EventsService } from '../events.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  eventId: any;
 eventDetails:any={}
//  dynamicSlides = [
//   {
//     id: 1,
//     src:'https://via.placeholder.com/600/92c952',
//     alt:'Side 1',
//     title:'Side 1'
//   },
//   {
//     id: 2,
//     src:'https://via.placeholder.com/600/771796',
//     alt:'Side 2',
//     title:'Side 2'
//   },
//   {
//     id: 3,
//     src:'https://via.placeholder.com/600/24f355',
//     alt:'Side 3',
//     title:'Side 3'
//   },
//   {
//     id: 4,
//     src:'https://via.placeholder.com/600/d32776',
//     alt:'Side 4',
//     title:'Side 4'
//   },
//   {
//     id: 5,
//     src:'https://via.placeholder.com/600/f66b97',
//     alt:'Side 5',
//     title:'Side 5'
//   }
// ]

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

  constructor(
    private route: ActivatedRoute,
    private eventsService:EventsService,
    private domSanitizer: DomSanitizer,

    
    ){}
  ngOnInit(): void {
  // Access the ID parameter from the activated route
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
      
      if(this.eventId)
      this.getEventsbyId(this.eventId)
      // Now you have access to the event ID, you can use it to fetch event details
    }); 
  
  }

  getEventsbyId(eventId:any) {
    // var AllEventList:any[]=[]
    this.eventsService.getEventsbyId(eventId).subscribe({
      next: (data) => {
        
        if (data) {
          this.eventDetails={...data};
        }
      },
      error: (error) => {
        

        console.error('There was an error!', error);
      },
    });
  }


  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl('https://mohammedward.bsite.net/Content/'+url);
}

@ViewChild('audioPlayer') audioPlayerRef!: ElementRef;
@ViewChild('audioSource') audioSourceRef!: ElementRef;

playAudio(audioUrl: string): void {
  
  
  const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
  const audioSource = this.audioSourceRef.nativeElement as HTMLSourceElement;

  audioSource.src = 'https://mohammedward.bsite.net/Content/'+audioUrl;
  audioPlayer.load();
  audioPlayer.play();
}

}
