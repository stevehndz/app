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
  idParagraph: string; // To manage paragraph
  idInput: string; // To manage input type

  constructor() {
    this.mensaje = 'Un saludo a todos';
    this.idParagraph = 'Parrafo principal';
    this.idInput = 'text';

    setTimeout(() => {
      // Time to change variable value
      this.mensaje = 'Otro mensaje diferente';
      this.idParagraph = 'main';
      this.idInput = 'password';
    }, 3000);
  }

  mostrarSaludo(): string {
    return 'Saludo desde el metodo';
  }
}
