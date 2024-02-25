import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgazaComponent } from './agaza.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  // { path: '', component: AgazaComponent },
  { path: '', component: SubmitComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgazaRoutingModule { }
