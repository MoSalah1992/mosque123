import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../media.service';
import { DomSanitizer } from '@angular/platform-browser';
import { faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-videoPlayer',
  templateUrl: './videoPlayer.component.html',
  styleUrls: ['./videoPlayer.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  videoId: any;
  videoList: any = {};
  faEye = faEye;

  constructor(
    private mediaService: MediaService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.videoId = history.state.videoId;
    if(this.videoId){

    this.getvideoById();
  }

  }

  sanitize(url: string) {
    
    if (url) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      return;
    }
  }
  getvideoById() {
    this.mediaService.getVideoById(this.videoId).subscribe({
      next: (data) => {
        
        if (data) {
          this.videoList = { ...data };
          this.addVideoViews(this.videoId);
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  addVideoViews(videoId: any) {
    this.mediaService.addVideoViews(videoId).subscribe({
      next: (data) => {
        
      },
      error: (error) => {
        

        console.error('There was an error!', error);
      },
    });
  }
}
