import { Component } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {

  variable: string = "Miguel Ruiz";
  mostrar: boolean = false;

  edad: number = 18;
}
