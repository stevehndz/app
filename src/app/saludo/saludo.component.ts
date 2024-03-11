import { Component } from '@angular/core';

@Component({
  selector: 'saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css',
})
export class SaludoComponent {
  mensaje: string; // Visualize this varaible only at this component

  constructor() {
    this.mensaje = 'Un saludo a todos';

    setTimeout(() => {
      // Time to change variable value
      this.mensaje = 'Otro mensaje diferente';
    }, 3000);
  }

  mostrarSaludo(): string {
    return 'Saludo desde el metodo';
  }
}
