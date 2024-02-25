import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodParcleComponent } from './food-parcle.component';

const routes: Routes = [{ path: '', component: FoodParcleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodParcleRoutingModule { }
