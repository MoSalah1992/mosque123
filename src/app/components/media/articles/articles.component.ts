import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  fullDescriptionSelected: any = {};

  constructor(private mediaService: MediaService) {}

  allArticles: any[] = [
    // {
    //   img:'',
    //   title:'name of salat t',
    //   description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   presonName:'mohammed Ali'
    // },
  ];
  page: any = 1;
  total: any = this.allArticles.length;

  changePage(event: any) {
    this.page = event;
  }

  ngOnInit(): void {
    this.PrivateFileId = history.state.PrivateFileId;
    
    this.getArticles({ PrivateFileId: this.PrivateFileId });
  }

  getArticles(paramAll?: any) {
    var param = {
      PrivateFileId: this.PrivateFileId ? this.PrivateFileId : undefined,

      OrderDirection:
        paramAll && paramAll.OrderDirection
          ? paramAll.OrderDirection
          : undefined,
    };
    this.mediaService.getArticles(param).subscribe({
      next: (data) => {
        
        if (data.length > 0) {
          this.allArticles = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  fullDescription(article: any) {
    this.addArticleViews(article.id);
    this.fullDescriptionSelected = article;
  }

  handleCloseArticale(fatwa: any) {
    this.getArticles();

    console.log('Close button clicked');
    // You can put any logic here that you want to execute when the close button is clicked
  }

  addArticleViews(articleId: any) {
    this.mediaService.addArticleViews(articleId).subscribe({
      next: (data) => {
      
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

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
    this.getArticles({ OrderDirection: 'asc' });
  }

  newest() {
    history.state.PrivateFileId = '';
    this.PrivateFileId = '';
    this.getArticles({ PrivateFileId: this.PrivateFileId });
  }

  searchClick() {
    
    this.allArticles = this.allArticles.filter(
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
      this.getArticles({ PrivateFileId: this.PrivateFileId });
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
