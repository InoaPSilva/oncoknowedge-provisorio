import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {
  messages: { text: string, type: string }[] = [];

  handleMessageSent(message: any) {
    this.messages.push({ text: message, type: 'question' });

    // Simulate response
    setTimeout(() => {
      this.messages.push({ text: 'Simulated response...', type: 'message' });
    }, 1000);
  }
}
