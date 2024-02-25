import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrayWithMeRoutingModule } from './pray-with-me-routing.module';
import { PrayWithMeComponent } from './pray-with-me.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    PrayWithMeComponent
  ],
  imports: [
    CommonModule,
    PrayWithMeRoutingModule,
    SharedModule
  ]
})
export class PrayWithMeModule { }
