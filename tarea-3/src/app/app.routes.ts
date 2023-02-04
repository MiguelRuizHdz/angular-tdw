import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PaisesComponent } from './paises/paises.component';
import { CiudadesComponent } from './ciudades/ciudades.component';

const routes: Routes = [
    { path: 'home', component: InicioComponent },
    { path: 'paises', component: PaisesComponent },
    { path: 'ciudades', component: CiudadesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
