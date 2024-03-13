import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sumar',
  standalone: true,
  imports: [],
  templateUrl: './sumar.component.html',
  styleUrl: './sumar.component.css'
})
export class SumarComponent {
  @Input() num1: number;
  @Input() num2: number;
  resultado: number;

  constructor () {
    this.num1 = 78;
    this.num2 = 3;
    this.resultado = 0;
  }

  onClick() {
    this.resultado = this.num1 + this.num2;
  }
}
