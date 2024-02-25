import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcamingComponent } from './upcaming.component';

const routes: Routes = [{ path: '', component: UpcamingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcamingRoutingModule { }
