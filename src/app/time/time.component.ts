import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css',
})
export class TimeComponent {
  contador: number;

  constructor() {
    this.contador = 10;
  }

  onClick() {
    let interval = setInterval(() => {
      this.contador--;
      if(this.contador === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
