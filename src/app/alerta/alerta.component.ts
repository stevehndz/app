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
  @Input() subTitulo: string;

  constructor() {
    this.mensaje = 'Mensaje de la alerta por defecto';
    this.subTitulo = 'valor del subtitulo';
  }

  ngOnInit(): void {
    console.log(this.mensaje);
  }
}
