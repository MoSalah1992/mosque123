import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamadanComponent } from './ramadan.component';

const routes: Routes = [
  { path: '', component: RamadanComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RAMADANRoutingModule { }
