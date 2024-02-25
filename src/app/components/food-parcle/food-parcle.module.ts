import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodParcleRoutingModule } from './food-parcle-routing.module';
import { FoodParcleComponent } from './food-parcle.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FoodParcleService } from './FoodParcle.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FoodParcleComponent
  ],
  imports: [
    CommonModule,
    FoodParcleRoutingModule,
    SharedModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers:[FoodParcleService]
})
export class FoodParcleModule { }
