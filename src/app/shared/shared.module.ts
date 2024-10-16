import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [
    MessageBoxComponent,
    MessageSenderComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()  
  ],
  exports: [
    MessageBoxComponent, MessageSenderComponent
  ]
})
export class SharedModule { }
