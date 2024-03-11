import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
    selector: 'app-padre',
    standalone: true,
    templateUrl: './padre.component.html',
    styleUrl: './padre.component.css',
    imports: [HijoComponent]
})
export class PadreComponent {

}
