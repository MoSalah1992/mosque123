import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './events.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { UpcamingComponent } from './upcaming/upcaming.component';
import { ArchiveComponent } from './archive/archive.component';


@NgModule({
  declarations: [
    EventsComponent,
    
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
