import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  standalone: true,
  imports: [],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.css'
})
export class AlertaComponent {
  // Component attribute to change values into father
  @Input('texto') mensaje: string;

  constructor() {
    this.mensaje = 'Mensaje de la alerta por defecto';

  }

  ngOnInit(): void {
    console.log(this.mensaje);
  }
}
