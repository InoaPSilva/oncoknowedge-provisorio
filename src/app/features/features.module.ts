import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    AuthModule
  ],
  exports: [FeaturesComponent]

})
export class FeaturesModule { }
