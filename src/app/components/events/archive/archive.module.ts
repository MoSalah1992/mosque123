import { NgModule } from '@angular/core';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveComponent } from './archive.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    ArchiveComponent,
    
  ],
  imports: [
    CommonModule,
    ArchiveRoutingModule,
    SharedModule,
    CarouselModule,  ]
})
export class ArchiveModule { }
