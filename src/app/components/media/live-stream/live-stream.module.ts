import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveStreamRoutingModule } from './live-stream-routing.module';
import { LiveStreamComponent } from './live-stream.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    LiveStreamComponent
  ],
  imports: [
    CommonModule,
    LiveStreamRoutingModule,
    SharedModule
  ]
})
export class LiveStreamModule { }
