import { Component } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent {

  ciudades = [
    {
      nombre: "Ciudad de México",
      poblacion: 9209944,
    },
    {
      nombre: "Tijuana",
      poblacion: 1810645,
    },
    {
      nombre: "Ecatepec de Morelos",
      poblacion: 1643623,
    },
    {
      nombre: "León",
      poblacion: 1579803,
    },
    {
      nombre: "Puebla de Zaragoza",
      poblacion: 1542232,
    },
    {
      nombre: "Ciudad Juárez",
      poblacion: 1501551,
    },
    {
      nombre: "Guadalajara",
      poblacion: 1385621,
    },
    {
      nombre: "Zapopan",
      poblacion: 1257547,
    },
    {
      nombre: "Monterrey",
      poblacion: 1142952,
    },
    {
      nombre: "Nezahualcóyotl",
      poblacion: 1072676,
    },
    {
      nombre: "Chihuahua",
      poblacion: 925762,
    },
    {
      nombre: "Mérida",
      poblacion: 921771,
    },
    {
      nombre: "Cancún",
      poblacion: 888797,
    },
    {
      nombre: "Saltillo",
      poblacion: 864431,
    },
    {
      nombre: "Aguascalientes",
      poblacion: 863893,
    },
    {
      nombre: "Hermosillo",
      poblacion: 855563,
    },
    {
      nombre: "Mexicali",
      poblacion: 854186,
    },
    {
      nombre: "San Luis Potosí",
      poblacion: 845941,
    },
    {
      nombre: "Culiacán Rosales",
      poblacion: 808416,
    },
    {
      nombre: "Santiago de Querétaro",
      poblacion: 794789,
    },
    {
      nombre: "Naucalpan de Juárez(municipio de Naucalpan)",
      poblacion: 776220,
    },
    {
      nombre: "Morelia",
      poblacion: 743275,
    },
    {
      nombre: "Chimalhuacán",
      poblacion: 703215,
    },
    {
      nombre: "Reynosa",
      poblacion: 691557,
    },
    {
      nombre: "Torreón",
      poblacion: 690193,
    },
    {
      nombre: "Tlalnepantla de Baz",
      poblacion: 658907,
    },
    {
      nombre: "Acapulco de Juárez",
      poblacion: 658609,
    },
    {
      nombre: "Tlaquepaque",
      poblacion: 650123,
    },
    {
      nombre: "Guadalupe",
      poblacion: 635862,
    },
    {
      nombre: "Victoria de Durango",
      poblacion: 616068,
    },
    {
      nombre: "Tuxtla Gutiérrez",
      poblacion: 578830,
    },
    {
      nombre: "Apodaca",
      poblacion: 536436,
    },
    {
      nombre: "Ciudad López Mateos",
      poblacion: 523065,
    },
    {
      nombre: "Cuautitlán Izcalli",
      poblacion: 515353,
    },
    {
      nombre: "Heroica Matamoros",
      poblacion: 510739,
    },
    {
      nombre: "General Escobedo",
      poblacion: 454967,
    },
    {
      nombre: "Irapuato",
      poblacion: 452090,
    },
    {
      nombre: "Xalapa",
      poblacion: 443063,
    },
    {
      nombre: "Tonalá",
      poblacion: 442440,
    },
    {
      nombre: "Mazatlán",
      poblacion: 441975,
    },
    {
      nombre: "Nuevo Laredo",
      poblacion: 416055,
    },
    {
      nombre: "San Nicolás de los Garza",
      poblacion: 412199,
    },
    {
      nombre: "Veracruz",
      poblacion: 405952,
    },
    {
      nombre: "Ojo de Agua",
      poblacion: 386290,
    },
    {
      nombre: "Xico",
      poblacion: 384327,
    },
    {
      nombre: "Celaya",
      poblacion: 378143,
    },
    {
      nombre: "Tepic",
      poblacion: 371387,
    },
    {
      nombre: "Ixtapaluca",
      poblacion: 368585,
    },
    {
      nombre: "Cuernavaca",
      poblacion: 341029,
    },
    {
      nombre: "Villahermosa",
      poblacion: 340060,
    },
    {
      nombre: "Ciudad Victoria",
      poblacion: 332100,
    },
    {
      nombre: "Ensenada",
      poblacion: 330652,
    },
    {
      nombre: "Ciudad Obregón",
      poblacion: 329404,
    },
    {
      nombre: "Villa Nicolás Romero",
      poblacion: 323545,
    },
    {
      nombre: "Soledad de Graciano Sánchez",
      poblacion: 310192,
    },
    {
      nombre: "Juárez",
      poblacion: 308285,
    },
    {
      nombre: "Playa del Carmen",
      poblacion: 304942,
    },
    {
      nombre: "Santa Catarina",
      poblacion: 304052,
    },
    {
      nombre: "Gómez Palacio",
      poblacion: 301742,
    },
    {
      nombre: "Uruapan del Progreso",
      poblacion: 299523,
    },
    {
      nombre: "Los Mochis",
      poblacion: 298009,
    },
    {
      nombre: "Pachuca de Soto",
      poblacion: 297848,
    },
    {
      nombre: "Tampico",
      poblacion: 297373,
    },
    {
      nombre: "Tehuacán",
      poblacion: 293825,
    },
    {
      nombre: "San Francisco Coacalco",
      poblacion: 293245,
    },
    {
      nombre: "Heroica Nogales",
      poblacion: 261137,
    },
    {
      nombre: "Oaxaca de Juárez",
      poblacion: 258913,
    },
    {
      nombre: "La Paz",
      poblacion: 250141,
    },
    {
      nombre: "San Francisco de Campeche",
      poblacion: 249623,
    },
    {
      nombre: "Monclova",
      poblacion: 237169,
    },
    {
      nombre: "García",
      poblacion: 234698,
    },
    {
      nombre: "Chilpancingo de los Bravo",
      poblacion: 225728,
    },
    {
      nombre: "Puerto Vallarta",
      poblacion: 224166,
    },
    {
      nombre: "Toluca de Lerdo",
      poblacion: 223876,
    },
    {
      nombre: "Tapachula",
      poblacion: 217550,
    },
    {
      nombre: "Buenavista",
      poblacion: 216776,
    },
    {
      nombre: "Coatzacoalcos",
      poblacion: 212540,
    },
    {
      nombre: "Ciudad Madero",
      poblacion: 205933,
    },
    {
      nombre: "Cabo San Lucas",
      poblacion: 202694,
    },
    {
      nombre: "Chicoloapan",
      poblacion: 193532,
    },
    {
      nombre: "Ciudad del Carmen",
      poblacion: 191238,
    },
    {
      nombre: "San Cristóbal de las Casas",
      poblacion: 183509,
    },
    {
      nombre: "Poza Rica de Hidalgo",
      poblacion: 180057,
    },
    {
      nombre: "San Juan del Río",
      poblacion: 177719,
    },
    {
      nombre: "San Luis Río Colorado",
      poblacion: 176685,
    },
    {
      nombre: "Chalco de Díaz Covarrubias",
      poblacion: 174704,
    },
    {
      nombre: "Jiutepec",
      poblacion: 174629,
    },
    {
      nombre: "Piedras Negras",
      poblacion: 173959,
    },
    {
      nombre: "Guadalupe",
      poblacion: 170029,
    },
    {
      nombre: "Chetumal",
      poblacion: 169028,
    },
    {
      nombre: "Miramar",
      poblacion: 161820,
    },
    {
      nombre: "Salamanca",
      poblacion: 160682,
    },
    {
      nombre: "Ciudad Acuña",
      poblacion: 160225,
    },
    {
      nombre: "Manzanillo",
      poblacion: 159853,
    },
    {
      nombre: "San Pablo de las Salinas",
      poblacion: 157998,
    },
    {
      nombre: "Cuautla",
      poblacion: 157336,
    },
    {
      nombre: "Zamora de Hidalgo",
      poblacion: 154546,
    },
    {
      nombre: "Villa de Álvarez",
      poblacion: 147496,
    },
    {
      nombre: "Colima",
      poblacion: 146965,
    },
    {
      nombre: "Fresnillo",
      poblacion: 143281,
    },
    {
      nombre: "Kanasín",
      poblacion: 139753,
    },
    {
      nombre: "Hacienda Santa Fe",
      poblacion: 139174,
    },
    {
      nombre: "Córdoba",
      poblacion: 139075,
    },
    {
      nombre: "Zacatecas",
      poblacion: 138444,
    },
    {
      nombre: "Ciudad Valles",
      poblacion: 136351,
    },
    {
      nombre: "San José del Cabo",
      poblacion: 136285,
    },
    {
      nombre: "Ciudad Cuauhtémoc",
      poblacion: 135586,
    },
    {
      nombre: "Naucalpan de Juárez(municipio de Huixquilucan)",
      poblacion: 134948,
    },
    {
      nombre: "Iguala",
      poblacion: 132854,
    },
    {
      nombre: "San Pedro Garza García",
      poblacion: 132128,
    },
    {
      nombre: "Veracruz(municipio de Boca del Río)",
      poblacion: 132011,
    },
    {
      nombre: "Delicias",
      poblacion: 128548,
    },
    {
      nombre: "Navojoa",
      poblacion: 120926,
    },
    {
      nombre: "Tepexpan",
      poblacion: 120778,
    },
    {
      nombre: "Orizaba",
      poblacion: 120500,
    },
    {
      nombre: "Cuautitlán",
      poblacion: 117995,
    },
    {
      nombre: "Guaymas",
      poblacion: 117253,
    },
    {
      nombre: "El Pueblito",
      poblacion: 115264,
    },
    {
      nombre: "Ramos Arizpe",
      poblacion: 114010,
    },
    {
      nombre: "Hidalgo del Parral",
      poblacion: 113843,
    },
    {
      nombre: "Comitán de Domínguez",
      poblacion: 113479,
    },
    {
      nombre: "Ciudad Guzmán",
      poblacion: 111975,
    },
    {
      nombre: "Lagos de Moreno",
      poblacion: 111569,
    },
    {
      nombre: "Río Bravo",
      poblacion: 111314,
    },
    {
      nombre: "Tulancingo de Bravo",
      poblacion: 106163,
    },
    {
      nombre: "Temixco",
      poblacion: 104461,
    },
    {
      nombre: "San Juan Bautista Tuxtepec",
      poblacion: 103609,
    },
    {
      nombre: "Apatzingán de la Constitución",
      poblacion: 102362,
    },
    {
      nombre: "Cholula de Rivadavia",
      poblacion: 102260,
    },
    {
      nombre: "Minatitlán",
      poblacion: 101336,
    },
    {
      nombre: "Rosarito",
      poblacion: 100660,
    }
  ];

}
