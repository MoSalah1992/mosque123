import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { UpcamingComponent } from './upcaming/upcaming.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  // { path: 'upcaming/:id', component: UpcamingComponent },
  // { path: 'archive/:id', component: ArchiveComponent },
  { path: 'archive/:id', loadChildren: () => import('./archive/archive.module').then(m => m.ArchiveModule) },
  { path: 'upcaming/:id', loadChildren: () => import('./upcaming/upcaming.module').then(m => m.UpcamingModule) },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
