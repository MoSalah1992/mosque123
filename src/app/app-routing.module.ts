import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const extraOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to home

  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./components/media/media.module').then((m) => m.MediaModule),
  },
  {
    path: 'privatefiles',
    loadChildren: () =>
      import('./components/private-files/private-files.module').then(
        (m) => m.PrivateFilesModule
      ),
  },
  {
    path: 'agaza',
    loadChildren: () =>
      import('./components/agaza/agaza.module').then((m) => m.AgazaModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./components/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  { 
    path: 'donate', 
    loadChildren: () => import('./components/donate/donate.module').then(m => m.DonateModule) 
  },
  { 
    path: 'Fatwa', 
    loadChildren: () => import('./components/fatwa/fatwa.module').then(m => m.FatwaModule) 
  },
  { 
    path: 'not-found', 
    component: NotFoundComponent 
  },
  { path: 'prayWithMe', loadChildren: () => import('./components/pray-with-me/pray-with-me.module').then(m => m.PrayWithMeModule) },
  { path: 'FoodParcle', loadChildren: () => import('./components/food-parcle/food-parcle.module').then(m => m.FoodParcleModule) },


  { 
    path: '**', 
    redirectTo: '/not-found' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,extraOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
