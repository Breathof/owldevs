import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public width: number = 200;
  public touch = false;
  
  constructor() {
    // this.width = 200;
  }

  ngOnInit(): void {
    // this.width = document.getElementById('logo').clientWidth;
  }

}
