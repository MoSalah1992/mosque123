import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioRoutingModule } from './audio-routing.module';
import { AudioComponent } from './audio.component';
import { AudioPlayerComponent } from './audioPlayer/audioPlayer.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    AudioComponent,
    AudioPlayerComponent
  ],
  imports: [
    CommonModule,
    AudioRoutingModule,
    SharedModule
  ]
})
export class AudioModule { }
