import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcamingRoutingModule } from './upcaming-routing.module';
import { UpcamingComponent } from './upcaming.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    UpcamingComponent,
    
  ],
  imports: [
    CommonModule,
    UpcamingRoutingModule,
    SharedModule,
    CarouselModule,
  ]
})
export class UpcamingModule { }
