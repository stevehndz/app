import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number;
  num2: number;
  resultado: number;

  constructor() {
    this.num1 = 23;
    this.num2 = 34;
    this.resultado = 0;
  }

  onClick() {
    this.resultado = this.num1 + this.num2;
  }
}
