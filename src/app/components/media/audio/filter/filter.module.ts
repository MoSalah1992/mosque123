import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    FilterRoutingModule,
    SharedModule,

  ]
})
export class FilterModule { }
