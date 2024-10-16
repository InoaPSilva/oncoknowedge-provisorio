import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  @Input() messages: { text: string, type: string }[] = []; // Receive messages as input

  constructor() { }

  clean() {
    this.messages.length = 0;
  }

  ngOnInit(): void {
  }

}
