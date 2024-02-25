import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { MediaService } from '../media.service';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { VideoPlayerComponent } from './videoPlayer/videoPlayer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    VideoComponent,
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule,
    FontAwesomeModule,


  ],

})
export class VideoModule { }
