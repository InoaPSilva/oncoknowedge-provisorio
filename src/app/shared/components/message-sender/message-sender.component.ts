import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent {
  newMessage: string = '';

  @Output() messageSent = new EventEmitter<any>();

  sendMessage() {
    if (this.newMessage.trim() !== '') {


      this.messageSent.emit(this.newMessage); // Emitting the message event
      this.newMessage = ''; // Clear the input field
    }
  }

}
