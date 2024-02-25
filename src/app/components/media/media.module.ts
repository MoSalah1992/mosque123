import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { VideoComponent } from './video/video.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MediaService } from './media.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule,
    NgxPaginationModule, 
    HttpClientModule

    
  ],
  providers: [MediaService]
  
})
export class MediaModule { }
