import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateFilesRoutingModule } from './private-files-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PrivateFilesService } from './PrivateFiles.service';
import { PrivateFilesComponent } from './private-files.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [PrivateFilesComponent],
  imports: [
    CommonModule,
    PrivateFilesRoutingModule,
    HttpClientModule,
    SharedModule


    
  ],
  providers: [PrivateFilesService]
  
})
export class PrivateFilesModule { }
