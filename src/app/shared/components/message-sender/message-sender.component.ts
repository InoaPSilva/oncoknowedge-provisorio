import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent {
  newMessage: string = ''; // Holds the current message text
  @Input() context: any; // Context data passed into the component
  @Output() messageSent = new EventEmitter<any>(); // Emit event when message is sent

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Emit the message, could also emit context if necessary
      this.messageSent.emit(this.newMessage);
      this.newMessage = ''; // Clear the message input after sending
    }
 
  }

}
