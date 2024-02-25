import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule

  ],
  exports: [SliderComponent,MainBannerComponent,FormsModule],
  declarations: [SliderComponent, MainBannerComponent]
})
export class SharedModule { }
