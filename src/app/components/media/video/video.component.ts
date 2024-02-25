import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MediaService } from '../media.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit, AfterViewInit {
  videoList: any[] = [
    // {
    //   title: 'name of salat t1',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // },
  ];
  pagedVideoList: any[] = []; // Paginated video data
  // pageSize = 2; // Number of items per page
  // page: number = 1;

  pageSize = 9; // Number of items per page
  totalItems: number = 0; // Total number of items
  currentPage: number = 1; // Current page
  totalPages: any;
  pageSizeOptions: number[] = [6, 12, 24]; // Available page size options
  selectedButton: string = 'Newest'; // Tracks the selected button

  constructor(
    private mediaService: MediaService,
    private domSanitizer: DomSanitizer,

    ) {
    // this.setPage(1); // Initial page load
    // // Load your video data or set totalItems from your service
    // this.totalItems = this.videoList.length;
    // this.setPage(this.currentPage);
  }

 
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
}

  ngAfterViewInit(): void {
    // this.totalItems = this.videoList.length;
    // this.setPage(this.currentPage);
  }

  ngOnInit() {
    this.getEventVideo();
  }
  // setPage(page: number) {
  //   
  //   this.currentPage = page;
  //   const startIndex = (page - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   this.pagedVideoList = this.videoList.slice(startIndex, endIndex);
  //   
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


  getEventVideo() {
    this.mediaService.getVideoHome().subscribe({
      next: (data) => {
        
        if (data.length > 0) {
          this.videoList = [...data];
          // this.videoList = [...data[0].videos];
          
          // 
          // this.totalItems = this.videoList.length;

          // this.setPage(1);
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
