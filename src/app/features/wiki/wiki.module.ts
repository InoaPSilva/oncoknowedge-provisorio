import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';
import { WikiChatComponent } from './wiki-chat/wiki-chat.component';
import { WikiBoxComponent } from './component/wiki-box/wiki-box.component';



@NgModule({
  declarations: [
    WikiComponent,
    WikiChatComponent,
    WikiBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WikiModule { }
