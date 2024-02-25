import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventList: any = {
    eventsBeforeToday:{},
    eventsAfterToday:{},
  };
  
  // pagedEventsList: any[] = []; // Paginated video data

  // pageSize = 9; // Number of items per page
  // totalItems: number = 0; // Total number of items
  // currentPage: number = 1; // Current page
  // totalPages: any;
  // pageSizeOptions: number[] = [6, 12, 24]; // Available page size options



  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  // setPage(page: number) {
  //   
  //   this.currentPage = page;
  //   const startIndex = (page - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   this.pagedEventsList = this.eventList.slice(startIndex, endIndex);
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

  getEvents() {
    // var AllEventList:any[]=[]
    this.eventsService.getEvents({}).subscribe({
      next: (data) => {
        
        if (data.length > 0) {
          
          // this.eventList = [...data];
          //  AllEventList=[...data];
          const currentDate = new Date();
    this.eventList.eventsBeforeToday = data.filter((event:any) => new Date(event.eventStartDate) < currentDate);
    this.eventList.eventsAfterToday = data.filter((event:any) => new Date(event.eventStartDate) >= currentDate);
          // this.totalItems = this.eventList.length;

          // this.setPage(1);
        }
      },
      error: (error) => {
        

        console.error('There was an error!', error);
      },
    });
  }

  getTruncatedDescription(description:any): string {
    return description.substring(0, 100) + '...';
  }


 

}

