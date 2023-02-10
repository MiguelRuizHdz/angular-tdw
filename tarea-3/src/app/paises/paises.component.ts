import { Component } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {

  paises: Array<any> = [
    {
      nombre: "Alemania",
      continente: "Europa"
    },
    {
      nombre: "Bélgica",
      continente: "Europa"
    },
    {
      nombre: "Croacia",
      continente: "Europa"
    },
    {
      nombre: "España",
      continente: "Europa"
    },
    {
      nombre: "Francia",
      continente: "Europa"
    },
    {
      nombre: "Italia",
      continente: "Europa"
    },
    {
      nombre: "China",
      continente: "Asia"
    },
    {
      nombre: "Corea del Sur",
      continente: "Asia"
    },
    {
      nombre: "Japón",
      continente: "Asia"
    },
    {
      nombre: "Rusia",
      continente: "Asia"
    },
    {
      nombre: "Camerún",
      continente: "África"
    },
    {
      nombre: "Egipto",
      continente: "África"
    },
    {
      nombre: "Marruecos",
      continente: "África"
    },
    {
      nombre: "Sudáfrica",
      continente: "África"
    },
    {
      nombre: "Argentina",
      continente: "América"
    },
    {
      nombre: "Brasil",
      continente: "América"
    },
    {
      nombre: "Canadá",
      continente: "América"
    },
    {
      nombre: "Chile",
      continente: "América"
    },
    {
      nombre: "Colombia",
      continente: "América"
    },
    {
      nombre: "Costa Rica",
      continente: "América"
    },
    {
      nombre: "Estados Unidos",
      continente: "América"
    },
    {
      nombre: "México",
      continente: "América"
    },
    {
      nombre: "Australia",
      continente: "Oceanía"
    },
    {
      nombre: "Nueva Zelanda",
      continente: "Oceanía"
    },
    {
      nombre: "Samoa",
      continente: "Oceanía"
    },
    {
      nombre: "Tonga",
      continente: "Oceanía"
    },
  ];
}
