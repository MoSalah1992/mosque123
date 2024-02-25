import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaService } from '../../media.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, AfterViewInit {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;
  @ViewChild('audioSource') audioSourceRef!: ElementRef;

  AudioList: any[] = [];

  mediaType: any[] = [];
  selectedMediaType: any;
  series: any[] = [];
  selectedseries: any;

  threads: any[] = [];
  selectedThreads: any;

  lecturers: any[] = [];
  selectedLecturers: any;

  pagedAudioList: any[] = []; // Paginated Audio data
  // pageSize = 2; // Number of items per page
  // page: number = 1;

  pageSize = 9; // Number of items per page
  totalItems: number = 0; // Total number of items
  currentPage: number = 1; // Current page
  totalPages: any;
  pageSizeOptions: number[] = [6, 12, 24]; // Available page size options
  oldUrl: any;

  constructor(
    private mediaService: MediaService,

    private domSanitizer: DomSanitizer
  ) {}

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngAfterViewInit(): void {
    // this.totalItems = this.videoList.length;
    // this.setPage(this.currentPage);
    this.PrivateFileId = history.state.PrivateFileId;
    if (this.PrivateFileId) {
      this.getAudios();
    }
    this.getMediaType();
    this.getLecturer();
    this.getThread();
    this.getSeries();
  }
  ngOnInit() {}
  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedAudioList = this.AudioList.slice(startIndex, endIndex);
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

  getAudios(paramAll?: any) {
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

      PrivateFileId: this.PrivateFileId ? this.PrivateFileId : undefined,

      OrderDirection:
        paramAll && paramAll.OrderDirection
          ? paramAll.OrderDirection
          : undefined,
    };

    this.AudioList = [];
    // this.pagedAudioList=[];
    this.mediaService.getAudios(param).subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.AudioList = [...data];
          this.totalItems = this.AudioList.length;
        }
        else{
          this.pagedAudioList=[];
        }
        this.setPage(1);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  playAudio(audioUrl: string): void {
    const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
    const audioSource = this.audioSourceRef.nativeElement as HTMLSourceElement;

    // Check if the new audio URL is different from the current one
    if (this.oldUrl != audioUrl) {
      this.oldUrl = audioUrl;

      // If it's a different URL, update the source and play the audio
      audioSource.src = audioUrl;
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      audioPlayer.load();
      audioPlayer.play();
    } else {
      // audioPlayer.play();
      if (audioPlayer.paused) {
        // If it's paused, play it
        audioPlayer.play();
      } else {
        // If it's not paused (i.e., playing), pause it
        audioPlayer.pause();
      }
      // this.oldUrl=''
      // If it's the same URL, you might choose to do nothing or handle it differently
      console.log('Audio file is already playing.');
    }
  }
  clearFind() {
    this.selectedMediaType = null;
    this.selectedLecturers = null;
    this.selectedThreads = null;
    this.getAudios();
  }

  handleMediatypeChange(event: any, type: any): void {
    this.selectedMediaType = type; // Update the selected media type
    this.getAudios();
    // Perform other necessary actions
  }

  handleLecturersChange(event: any, type: any) {
    this.selectedLecturers = type; // Update the selected media type
    this.getAudios();
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
    this.getAudios();
  }

  filterFind() {}

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
            this.getAudios();
          } else {
            this.getAudios();
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
  searchBox: any = '';
  PrivateFileId: any = undefined;
  selectedButton: string = ''; // Tracks the selected button

  selectButton(buttonName: string): void {
    this.selectedButton = buttonName;
    this.removeStateParameterFromHistory('PrivateFileId');

    switch (buttonName) {
      case 'Newest':
        this.newest();
        break;

      case 'Views':
        break;

      case 'Popular':
        break;

      case 'A-Z':
        this.AToZ();
        break;

      default:
        break;
    }
  }

  AToZ() {
    this.getAudios({ OrderDirection: 'asc' });
  }

  newest() {
    history.state.PrivateFileId = '';
    this.PrivateFileId = '';
    this.getAudios({ PrivateFileId: this.PrivateFileId });
  }

  searchClick() {
    
    this.pagedAudioList = this.pagedAudioList.filter(
      (item) =>
        item.title_En?.toLowerCase().includes(this.searchBox.toLowerCase()) ||
        item.description_En
          ?.toLowerCase()
          .includes(this.searchBox.toLowerCase())
    );
  }

  onSearch() {
    
    if (this.searchBox == '') {
      history.state.PrivateFileId = '';
      this.PrivateFileId = '';
      this.getAudios({ PrivateFileId: this.PrivateFileId });
    } else {
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
