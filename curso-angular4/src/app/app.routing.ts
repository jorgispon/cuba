import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { EmpleadosComponent } from './empleados/empleados.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

//Definimos una variable constante, es un Array, aquí estamos creando las distintas rutas que usaremos.
const appRoutes: Routes = [
    {path: '', component:HomeComponent}, //PAGINA HOME, POR DEFECTO
    {path: 'empleados', component:EmpleadosComponent},
    {path: 'fruta', component:FrutaComponent},
    {path: 'home', component:HomeComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'contacto/:page', component:ContactoComponent},
    {path: 'coches', component:CochesComponent},
    {path: 'plantillas', component:PlantillasComponent},
    {path: '**', component:HomeComponent} //CUANDO DA ERROR APARECE ESTO
];

//Exportamos una constante que es un Array de cualquier tipo
export const appRoutingProviders: any[] = [];

//Con el metodo forRoot le decimos que Array de rutas tiene que cargar, en este caso el nuestro instanciado
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
