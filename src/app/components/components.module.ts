import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { PrivateFilesComponent } from './private-files/private-files.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,

  ],
  exports:[
    MainContentComponent,
  ],
  declarations: [MainContentComponent]
})
export class ComponentsModule { }
