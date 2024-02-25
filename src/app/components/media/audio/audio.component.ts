import { Component, OnInit, AfterViewInit,ViewChild, ElementRef  } from '@angular/core';
import { MediaService } from '../media.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit ,AfterViewInit{

  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;
  @ViewChild('audioSource') audioSourceRef!: ElementRef;

  selectedButton: string = 'Newest'; // Tracks the selected button
  
  AudioList:any[] = [];

  pagedAudioList: any[] = []; // Paginated Audio data
  // pageSize = 2; // Number of items per page
  // page: number = 1;

  pageSize = 9; // Number of items per page
  totalItems: number = 0; // Total number of items
  currentPage: number = 1; // Current page
  totalPages: any;
  pageSizeOptions: number[] = [6, 12, 24]; // Available page size options

  constructor(
    private mediaService: MediaService,

    private domSanitizer: DomSanitizer,

  ) {
    
  }


  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
}

  ngAfterViewInit(): void {
    // this.totalItems = this.videoList.length;
    // this.setPage(this.currentPage);
    this.getAudioHome();

  }
  ngOnInit() {}

   // Function to handle button click event
   selectButton(buttonName: string): void {
    this.selectedButton = buttonName;
  }
  // setPage(page: number) {
  //   
  //   this.currentPage = page;
  //   const startIndex = (page - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   this.pagedAudioList = this.AudioList.slice(startIndex, endIndex);
  // }

  // prevPage() {
  //   

  //   if (this.currentPage > 1) {
  //     this.setPage(this.currentPage - 1);
  //   }
  // }

  // nextPage() {
  //   

  //   this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  //   if (this.currentPage < this.totalPages) {
  //     this.setPage(this.currentPage + 1);
  //   }
  // }

  // get pages(): number[] {
  //   this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  //   return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  // }
  // changePageSize(newSize: number) {
  //   this.pageSize = newSize;
  //   this.setPage(1); // Reset to the first page when changing the page size
  // }


  getAudioHome() {
    this.mediaService.getAudioHome().subscribe({
      next: (data) => {
        
        if (data.length > 0) {
          this.AudioList = [...data];
          // this.totalItems = this.AudioList.length;

          // this.setPage(1);
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }


  playAudio(audioUrl: string): void {
    
    
    const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
    const audioSource = this.audioSourceRef.nativeElement as HTMLSourceElement;

    audioSource.src = audioUrl;
    audioPlayer.load();
    audioPlayer.play();
  }
  
}
