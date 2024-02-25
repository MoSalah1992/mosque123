import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  pagedBookList: any[] = []; // Paginated Audio data
  // pageSize = 2; // Number of items per page
  // page: number = 1;

  pageSize = 9; // Number of items per page
  totalItems: number = 0; // Total number of items
  currentPage: number = 1; // Current page
  totalPages: any;
  pageSizeOptions: number[] = [6, 12, 24]; // Available page size options


  allBooks:any[]=[];
  constructor(
    private mediaService:MediaService
  ){  }


  Subtitle1:any[]=[

  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]
Subtitle2:any[]=[

  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img:'',
    title:'name of salat t',
    description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]




  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getBooks();
  }

  getBooks() {
    // Implement your logic for the "New Books" button here
    this.mediaService.getBooks().subscribe({
      next: (data) => {
        
        if (data.length > 0) {
          
          this.allBooks = [...data];

          this.totalItems = this.allBooks.length;

          this.setPage(1);
        }
      },
      error: (error) => {
        

        console.error('There was an error!', error);
      },
    });
  }

  openBookLink(url: string): void {
    window.open(url, '_blank'); // Opens the URL in a new tab
  }

  setPage(page: number) {
    
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedBookList = this.allBooks.slice(startIndex, endIndex);
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
