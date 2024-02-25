import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './audio.component';
import { AudioPlayerComponent } from './audioPlayer/audioPlayer.component';

const routes: Routes = [
  { path: '', component: AudioComponent },
  // { path: 'player', component: AudioPlayerComponent },
  { path: 'filter', loadChildren: () => import('./filter/filter.module').then(m => m.FilterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioRoutingModule { }
