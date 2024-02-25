import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FatwaRoutingModule } from './fatwa-routing.module';
import { FatwaComponent } from './fatwa.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { FatwaService } from './fatwa.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FatwaComponent
  ],
  imports: [
    CommonModule,
    FatwaRoutingModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule
    

  ],
  providers:[FatwaService]
})
export class FatwaModule { }
