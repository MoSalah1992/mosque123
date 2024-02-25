import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgazaRoutingModule } from './agaza-routing.module';
import { AgazaComponent } from './agaza.component';
import { SubmitComponent } from './submit/submit.component';
// import { NgxIntlTelephoneInputModule } from "ngx-intl-telephone-input";
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SharedModule } from 'src/app/shared/components/shared.module';
import { AgazaService } from './agaza.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AgazaComponent,
    SubmitComponent
  ],
  imports: [
    CommonModule,
    AgazaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // NgxIntlTelephoneInputModule,
    NgxIntlTelInputModule,
    SharedModule,
    HttpClientModule,
    

    
  ],
  providers:[AgazaService]
})
export class AgazaModule { }
