import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/service/chat.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {
  constructor(private chatService: ChatService) { }

  messages: { text: string, type: string }[] = [];

  handleMessageSent(message: any) {
    const question = message;
    const contexto = ' ';
    console.log(message);

    this.messages.push({ text: message, type: 'question' });
    this.chatService.sendQuestion(question, contexto, 'fb1b-54e7-4c6a-8c9e-7c7e-2326c5').subscribe((res: any) => {
      console.log(res.response);

      setTimeout(() => {
        this.messages.push({ text: res.response, type: 'message' });
      }, 1000);
    })


  }
}
