import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';



@NgModule({
  declarations: [
    MessageBoxComponent,
    MessageSenderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
