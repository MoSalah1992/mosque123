import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenRoutingModule } from './women-routing.module';
import { WomenComponent } from './women.component';
import { MainBannerComponent } from 'src/app/shared/components/main-banner/main-banner.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    WomenComponent
  ],
  imports: [
    CommonModule,
    WomenRoutingModule,
    SharedModule
  ]
})
export class WomenModule { }
