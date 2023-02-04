import { Component } from '@angular/core';

@Component({
  selector: 'app-verduras2',
  templateUrl: './verduras2.component.html',
  styleUrls: ['./verduras2.component.css']
})
export class Verduras2Component {

  verduras: Array<any> =[
    {
      verdura: 'Tomate',
      color: 'Rojo',
      precio: 60
    },
    {
      verdura: 'Zanahoria',
      color: 'Naranja',
      precio: 50
    },
    {
      verdura: 'Cebolla',
      color: 'Morada',
      precio: 75
    },
    {
      verdura: 'Rabanos',
      color: 'Morado',
      precio: 430
    }
  ];

}
