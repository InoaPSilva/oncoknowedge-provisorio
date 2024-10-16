import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { AuthModule } from './auth/auth.module';
import { WikiModule } from './wiki/wiki.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    WikiModule,
    SharedModule
  ],
  exports: [FeaturesComponent]

})
export class FeaturesModule { }
