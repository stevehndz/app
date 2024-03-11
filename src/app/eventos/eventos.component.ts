import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  onClick() {
    console.log('Se ha pulsado');
    
  }
}
