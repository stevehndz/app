import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-evtbinding',
  standalone: true,
  imports: [],
  templateUrl: './evtbinding.component.html',
  styleUrl: './evtbinding.component.css'
})
export class EvtbindingComponent {
  mensaje: string;

  constructor() {
    this.mensaje = 'Este es el mensaje inicial';
  }

  onClick($event: any) {
    console.log('Se ha pulsado el boton');
    console.log($event);

  }

  onChange($event: any) {
    console.log($event.target.value);

  }

  onMouseEnter() {
    this.mensaje = "Estoy dentro del div";
  }

  onMouseOut() {
    this.mensaje = "He salido del div"
  }
}
