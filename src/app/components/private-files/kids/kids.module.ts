import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';
import { KidsComponent } from './kids.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    KidsComponent
  ],
  imports: [
    CommonModule,
    KidsRoutingModule,
    SharedModule

  ]
})
export class KidsModule { }
