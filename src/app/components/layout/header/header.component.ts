import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  private routes : Array<{name: string, url: string}> = [];

  constructor() { }

  ngOnInit(): void {
    this.routes = [{
      name: 'Graphic 1',
      url: '/graphic1'
    },{
      name: 'Graphic 2',
      url: '/graphic2'
    }];
  }

}
