import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from "./saludo/saludo.component";
import { PadreComponent } from "./padre/padre.component";
import { EventosComponent } from "./eventos/eventos.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { TimeComponent } from './time/time.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SaludoComponent, PadreComponent, EventosComponent, CalculadoraComponent, TimeComponent]
})
export class AppComponent {
  title = 'app';
}
