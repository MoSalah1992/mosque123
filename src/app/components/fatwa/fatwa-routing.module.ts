import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatwaComponent } from './fatwa.component';

const routes: Routes = [{ path: '', component: FatwaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FatwaRoutingModule { }
