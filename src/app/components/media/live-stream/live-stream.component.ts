import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.scss'],
})
export class LiveStreamComponent implements OnInit {
  liveDetails: any = {};
  constructor(private mediaService: MediaService) {}
  ngOnInit(): void {
    this.getLiveStream();
  }

  getLiveStream() {
    this.mediaService.getLiveStream().subscribe({
      next: (data) => {
        
        if (data.length > 0) {
          this.liveDetails = data[data.length - 1];
        }
      },
      error: (error) => {
        

        console.error('There was an error!', error);
      },
    });
  }

  openLink(url: any) {
    window.open(url, '_blank'); // '_blank' opens the link in a new tab
  }
}
