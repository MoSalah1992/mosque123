import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateFilesComponent } from './private-files.component';

const routes: Routes = [
  
  { path: '', component: PrivateFilesComponent },
  { path: 'ramadan', loadChildren: () => import('./ramadan/ramadan.module').then(m => m.RamadanModule) },
  
  { path: 'kids', loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule) },
  
  { path: 'women', loadChildren: () => import('./women/women.module').then(m => m.WomenModule) },
  
  { path: 'general', loadChildren: () => import('./general/general.module').then(m => m.GeneralModule) },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateFilesRoutingModule { }
