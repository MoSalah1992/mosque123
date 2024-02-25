import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrayWithMeComponent } from './pray-with-me.component';

const routes: Routes = [{ path: '', component: PrayWithMeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrayWithMeRoutingModule { }
