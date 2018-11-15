import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { EmpleadosComponent } from './empleados/empleados.component';
import { FrutaComponent } from './fruta/fruta.component';

//Definimos una variable constante, es un Array
const appRoutes: Routes = [
    {path: '', component:EmpleadosComponent}, //PAGINA HOME, POR DEFECTO
    {path: 'empleado', component:EmpleadosComponent},
    {path: 'fruta', component:FrutaComponent},
    {path: '**', component:EmpleadosComponent} //CUANDO DA ERROR APARECE ESTO
];

//Exportamos una constante que es un Array de cualquier tipo
export const appRoutingProviders: any[] = [];

//Con el metodo forRoot le decimos que Array de rutas tiene que cargar, en este caso el nuestro instanciado
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
