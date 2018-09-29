import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Owl Devs';
  public width: number = 200;
  public touch = false;
  
  constructor() {
    this.width = 200;
  }

  ngOnInit(): void {
    console.log(document.getElementById('logo'));
    this.width = document.getElementById('logo').clientWidth;
  }

  public move(event) {
    if (this.touch) {
      this.width += 50;
      this.touch = !this.touch;
    } else {
      this.width -= 50;
      this.touch = !this.touch;
    }
    console.log("Event fired!");
  }
}
