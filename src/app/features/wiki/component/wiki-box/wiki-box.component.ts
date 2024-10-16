import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-box',
  templateUrl: './wiki-box.component.html',
  styleUrls: ['./wiki-box.component.css']
})
export class WikiBoxComponent implements OnInit {
  @Input() field:any;
  @Input() title:any;



  constructor() { }

  ngOnInit(): void {
  }

}
