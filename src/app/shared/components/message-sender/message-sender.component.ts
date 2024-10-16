import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent {
  newMessage: string = '';
  @Input() context: any;
  @Output() messageSent = new EventEmitter<any>();

  sendMessage() {
    if (this.newMessage.trim() !== '') {


      this.messageSent.emit(this.newMessage); // Emitting the message event
      this.newMessage = ''; // Clear the input field
    }
  }

}
