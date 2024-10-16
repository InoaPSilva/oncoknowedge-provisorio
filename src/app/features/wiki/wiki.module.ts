import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';
import { WikiBoxComponent } from './component/wiki-box/wiki-box.component';
import { WikiChatComponent } from './layout/wiki-chat/wiki-chat.component';
import { NavBarComponent } from '../../core/layout/nav-bar/nav-bar.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    WikiComponent,
    WikiChatComponent,
    WikiBoxComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ],
  exports: [WikiComponent, WikiChatComponent, WikiBoxComponent, NavBarComponent]
})
export class WikiModule { }
