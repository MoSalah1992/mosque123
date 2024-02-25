import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RAMADANRoutingModule } from './ramadan-routing.module';
import { RamadanComponent } from './ramadan.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    RamadanComponent
  ],
  imports: [
    CommonModule,
    RAMADANRoutingModule,
    SharedModule

  ]
})
export class RamadanModule { }
