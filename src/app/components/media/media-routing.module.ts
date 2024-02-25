import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  // { path: 'video', component: VideoComponent },
  // { path: 'video/player', component: VideoComponent },

  { path: 'video', loadChildren: () => import('./video/video.module').then(m => m.VideoModule) },
  { path: 'audio', loadChildren: () => import('./audio/audio.module').then(m => m.AudioModule) },
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: 'liveStream', loadChildren: () => import('./live-stream/live-stream.module').then(m => m.LiveStreamModule) },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
