import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/service/chat.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {
  constructor(private chatService: ChatService) { }

  messages: { text: string, type: string }[] = [];
  contexto: any = ' ';

  handleContextReceived(message: any) {
    this.contexto = message;
  }

  handleMessageSent(message: any) {
    const question = message;
    console.log(message);

    this.messages.push({ text: message, type: 'question' });
    this.chatService.sendQuestion(question).subscribe((res: any) => {
      console.log(res.response);

      setTimeout(() => {
        this.messages.push({ text: res.response, type: 'message' });
      }, 1000);
    })


  }
}
