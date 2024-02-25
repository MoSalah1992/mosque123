import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaService } from '../../media.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, AfterViewInit {
  videoList: any[] = [
    // {
    //   title: 'name of salat t1',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // },
  ];

  mediaType: any[] = [];
  selectedMediaType: any;
  series: any[] = [];
  seriesChecked: any[] = [];
  selectedButton: string = ''; // Tracks the selected button

  threads: any[] = [];
  // threadsChecked: any[] = [];
  selectedThreads: any;

  lecturers: any[] = [];
  // lecturersChecked: any[] = [];
  selectedLecturers: any;

  pagedVideoList: any[] = []; // Paginated video data
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
    private route: ActivatedRoute
  ) {
    // this.setPage(1); // Initial page load
    // // Load your video data or set totalItems from your service
    // this.totalItems = this.videoList.length;
    // this.setPage(this.currentPage);
    // Get NavigationStart events
  }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngAfterViewInit(): void {
    // this.totalItems = this.videoList.length;
    // this.setPage(this.currentPage);
  }

  PrivateFileId:any=undefined;
  ngOnInit() {

    this.PrivateFileId = history.state.PrivateFileId;
    if(this.PrivateFileId){
      this.getVideo();
    }
    
    this.getMediaType();
    this.getLecturer();
    this.getThread();
    this.getSeries();
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedVideoList = this.videoList.slice(startIndex, endIndex);
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

  // pageChanged(event: any) {
  //   console.log('Event:', event);
  //   

  //   if (!isNaN(event) && event > 0) {
  //     this.setPage(event);
  //   }
  // }

  // setPage(page: number) {
  //   const startIndex = (page - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   this.pagedVideoList = this.videoList.slice(startIndex, endIndex);
  // }

  getVideo(paramAll?:any) {
    
    
    var param = {
      MediaTypeId:
        this.selectedMediaType && this.selectedMediaType.id
          ? this.selectedMediaType.id
          : undefined,
      //  SeriesId: this.selectedMediaType.id ,
      LecturerId:
        this.selectedLecturers && this.selectedLecturers.id
          ? this.selectedLecturers.id
          : undefined,
      ThreadId:
        this.selectedThreads && this.selectedThreads.id
          ? this.selectedThreads.id
          : undefined,

      PrivateFileId:
        this.PrivateFileId 
          ? this.PrivateFileId
          : undefined,

      OrderDirection:
      paramAll&&paramAll.OrderDirection
            ? paramAll.OrderDirection
            : undefined,
    };

    this.videoList=[];
    // this.pagedVideoList=[];
    this.mediaService.getVideos(param).subscribe({
      next: (data) => {
        this.videoList=[];
        // this.pagedVideoList=[];
        
        if (data.length > 0) {
          this.videoList = [...data];
          this.totalItems = this.videoList.length;

        }else{
          this.pagedVideoList=[];
        }
        this.setPage(1);

      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  handleMediatypeChange(event: any, type: any): void {
    this.selectedMediaType = type; // Update the selected media type
    this.getVideo();
    // Perform other necessary actions
  }

  handleLecturersChange(event: any, type: any) {
    this.selectedLecturers = type; // Update the selected media type
    this.getVideo();
    // // Access the checked status of the checkbox
    // const isChecked = event.target.checked;
    // // console.log('Checkbox checked status:', isChecked);

    // // You can perform further actions based on the checked status
    // if (isChecked) {
    //   // Checkbox is checked
    //   this.lecturersChecked.push(value.id);
    // } else {
    //   // Checkbox is unchecked
    //   // Find the index of the value you want to delete
    //   const index = this.lecturersChecked.indexOf(value.id);

    //   // If the value exists in the array, remove it
    //   if (index !== -1) {
    //     this.lecturersChecked.splice(index, 1);
    //   }
    // }
  }

  handlethreadsChange(event: any, type: any): void {
    this.selectedThreads = type; // Update the selected media type
    // Perform other necessary actions
    this.getVideo();
  }

  filterFind() {
    this.getVideo();
  }

  clearFind() {
    this.selectedMediaType = null;
    this.selectedLecturers = null;
    this.selectedThreads = null;
    this.getVideo();
  }

  /////////////// filter area ////////
  getMediaType() {
    
    this.mediaService.getMediaType().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.mediaType = [...data];
          const mediaTypeValue = history.state.mediaType;

          if (mediaTypeValue) {
            var mediaType: any = this.mediaType.find(
              (item) => item.name_En == mediaTypeValue
            );

            this.selectedMediaType = mediaType;
            this.getVideo();
          }else{
            this.getVideo();

          }
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getSeries() {
    this.mediaService.getSeries().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.series = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getThread() {
    this.mediaService.getThread().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.threads = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getLecturer() {
    this.mediaService.getLecturer().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.lecturers = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  /////////

    // Function to handle button click event
    selectButton(buttonName: string): void {
      this.selectedButton = buttonName;
      this.removeStateParameterFromHistory('PrivateFileId');

      switch(buttonName) {
        case 'Newest':
          this.newest()
        break;
   
        case 'Views':
  
          break;
   
        case 'Popular':
  
          break;
   
        case 'A-Z':
          this.AToZ()
          break;
   
        default:
          
          break;
   
      }
    }
  
    AToZ(){
      this.getVideo({OrderDirection:"asc"});
  
    }
  
    newest(){
      history.state.PrivateFileId="";
      this.PrivateFileId="";
      this.getVideo({PrivateFileId:this.PrivateFileId});
  
    }
  
    searchClick(){
      this.pagedVideoList = this.pagedVideoList.filter(item =>
        item.title_En?.toLowerCase().includes(this.searchBox.toLowerCase()) ||
        item.description_En?.toLowerCase().includes(this.searchBox.toLowerCase())
      );
    }
  searchBox:any='';
  
    onSearch() {
      
      if (this.searchBox == "") {
        history.state.PrivateFileId="";
        this.PrivateFileId="";
        this.getVideo({PrivateFileId:this.PrivateFileId});
      } 
      else {
        // Handle the logic for when there is input in the search box
        console.log('Search box has input:', this.searchBox);
      }
    }
    
    removeStateParameterFromHistory(parameterName: string) {
      
      const currentState = history.state;
      if (currentState && currentState[parameterName]) {
        delete currentState[parameterName];
        history.replaceState(currentState, '');
      }
    }
}
