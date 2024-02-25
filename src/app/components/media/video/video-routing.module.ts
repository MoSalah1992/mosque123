import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video.component';
import { VideoPlayerComponent } from './videoPlayer/videoPlayer.component';

const routes: Routes = [

  { path: '', component: VideoComponent },
  { path: 'player', component: VideoPlayerComponent },

  { path: 'filter', loadChildren: () => import('./filter/filter.module').then(m => m.FilterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
