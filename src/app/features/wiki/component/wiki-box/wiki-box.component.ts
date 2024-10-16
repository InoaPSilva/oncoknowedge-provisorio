import { Component, EventEmitter, Input, Output } from '@angular/core';
import { carcinoma_sarcoma } from '../../consts/carcinoma_sarcoma';

@Component({
  selector: 'app-wiki-box',
  templateUrl: './wiki-box.component.html',
  styleUrls: ['./wiki-box.component.css']
})
export class WikiBoxComponent {
  @Input() field: any;
  @Input() title: any;
  @Output() messageSent = new EventEmitter<any>();
  a: any = carcinoma_sarcoma


  handleClick(cancer: any): void {
    console.log('Dados clicados:', cancer);
    this.messageSent.emit(cancer)
    // You can handle this data however you like
    // For example, showing a modal, navigating to a details page, etc.
  }

  // Retorna as chaves do objeto
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  // Verifica se o valor é um array
  isArray(val: any): boolean {
    return Array.isArray(val);
  }

  // Verifica se o valor é um objeto
  isObject(val: any): boolean {
    return typeof val === 'object' && !this.isArray(val);
  }

  constructor() { }

}
