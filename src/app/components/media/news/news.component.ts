import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  pageSize = 9; // Number of items per page
  totalItems: number = 0; // Total number of items
  currentPage: number = 1; // Current page
  totalPages: any;
  pageSizeOptions: number[] = [6, 12, 24]; // Available page size options
  fullDescriptionSelected:any={};
  pagedNewsList: any[] = []; // Paginated Audio data
  // ArrayOfFormNews: any[] = [];

  newsList:any[] = [];
  constructor(
    private mediaService:MediaService
  ){

  }
  
  ngOnInit(): void {
    this.getNews()
  }

  getNews() {
    this.mediaService.getNews().subscribe({
      next: (data) => {
        
        if (data.length > 0) {
          this.newsList = [...data];
          this.totalItems = this.newsList.length;

          this.setPage(1);
          // this.newsList = this.groupBy(data, 'newsType_En');
          // this.newsList = this.groupByNewsTypeId(data)

          

        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  
  addNewsViews(newsId:any) {
    this.mediaService.addNewsViews(newsId).subscribe({
      next: (data) => {
        
     
      },
      error: (error) => {
        

        console.error('There was an error!', error);
      },
    });
  }

  

  getTruncatedDescription(description:any): string {
    return description.substring(0, 100) + '...';
  }

  fullDescription(fatwa: any) {
    this.addNewsViews(fatwa.id);
    this.fullDescriptionSelected=fatwa
  }


  handleCloseFatwa(fatwa: any) {
    this.getNews();

    // You can put any logic here that you want to execute when the close button is clicked
  }

  // groupBy(collection: any[], property: string): any {
  //   
  //   return collection.reduce((acc, obj) => {
  //     const key = obj[property];
  //     (acc[key] = acc[key] || []).push(obj);
  //     return acc;
  //   }, {});
  // }

  // groupByNewsTypeId(newsItems: any[]): any[] {
  //   const groupedItems = newsItems.reduce((acc, item) => {
  //     const { newsTypeId, newsType_Ar, newsType_En, ...news } = item;
  //     if (!acc[newsTypeId]) {
  //       acc[newsTypeId] = { newsTypeId, newsType_Ar, newsType_En, news: [] };
  //     }
  //     acc[newsTypeId].news.push(news);
  //     return acc;
  //   }, {} as { [key: number]: any });

  //   return Object.values(groupedItems);
  // }

  openBookLink(url: string): void {
    window.open(url, '_blank'); // Opens the URL in a new tab
  }

  setPage(page: number) {
    
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedNewsList = this.newsList.slice(startIndex, endIndex);
  }

  prevPage() {
    

    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  nextPage() {
    

    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  get pages(): number[] {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }
  changePageSize(newSize: number) {
    this.pageSize = newSize;
    this.setPage(1); // Reset to the first page when changing the page size
  }

}
