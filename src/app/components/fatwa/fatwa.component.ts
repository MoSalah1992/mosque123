import { Component } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FatwaService } from './fatwa.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
@Component({
  selector: 'app-fatwa',
  templateUrl: './fatwa.component.html',
  styleUrls: ['./fatwa.component.scss'],
})
export class FatwaComponent {
  fatube = faYoutube;
  like = faThumbsUp;
  faEye = faEye;

  PrivateFileId:any=undefined;
  fullDescriptionSelected: any = {};
  searchBox:any='';
  isLoading: boolean = false;
  ArrayOfFormFatwa: any[] = [];

  constructor(
    private fatwaService: FatwaService,
    private loadingService:LoadingService
    ) {}

  ngOnInit(): void {
    this.PrivateFileId = history.state.PrivateFileId;

    this.getFatwas({PrivateFileId:this.PrivateFileId});
  }

  getFatwas(param:any) {
    // Implement your logic for the "New Video" button here
    // var param = {
    //   PrivateFileId:
    //     this.PrivateFileId 
    //       ? this.PrivateFileId
    //       : undefined,
    //   // //  SeriesId: this.selectedMediaType.id ,
    //   // LecturerId:
    //   //   this.selectedLecturers && this.selectedLecturers.id
    //   //     ? this.selectedLecturers.id
    //   //     : undefined,
    //   // ThreadId:
    //   //   this.selectedThreads && this.selectedThreads.id
    //   //     ? this.selectedThreads.id
    //   //     : undefined,
    // };

    this.fatwaService.getFatwas(param).subscribe({
      next: (data) => {
     
        if (data.length > 0) {
          this.ArrayOfFormFatwa = [...data];
        }
           setTimeout(() => {
          this.isLoading = true;
  this.loadingService.setLoadingState(true);

        }, 500);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
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

  getTruncatedDescription(description: any): string {
    return description.substring(0, 250) + '...';
  }

  fullDescription(fatwa: any) {
    this.addFatwaViews(fatwa.id);
    this.fullDescriptionSelected = fatwa;
  }

  handleCloseFatwa(fatwa: any) {
    this.getFatwas({PrivateFileId:this.PrivateFileId});

    console.log('Close button clicked');
    // You can put any logic here that you want to execute when the close button is clicked
  }
  selectedButton: string = ''; // Tracks the selected button

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
    this.getFatwas({OrderDirection:"asc"});

  }

  newest(){
    history.state.PrivateFileId="";
    this.PrivateFileId="";
    this.getFatwas({PrivateFileId:this.PrivateFileId});

  }

  searchClick(){
    this.ArrayOfFormFatwa = this.ArrayOfFormFatwa.filter(item =>
      item.question_En?.toLowerCase().includes(this.searchBox.toLowerCase()) ||
      item.answer_En?.toLowerCase().includes(this.searchBox.toLowerCase())
    );
  }

  onSearch() {
    
    // This method will be triggered whenever the input changes, including clearing the input
    if (this.searchBox == "") {
      history.state.PrivateFileId="";
      this.PrivateFileId="";
      this.getFatwas({PrivateFileId:this.PrivateFileId});
    } 
    // else {
    //   // Handle the logic for when there is input in the search box
    //   console.log('Search box has input:', this.searchBox);
    // }
  }


  removeStateParameterFromHistory(parameterName: string) {
    
    const currentState = history.state;
    if (currentState && currentState[parameterName]) {
      delete currentState[parameterName];
      history.replaceState(currentState, '');
    }
  }
}
