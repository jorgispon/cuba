import { Component } from '@angular/core';

@Component({
    selector: 'empleados',
    templateUrl: './empleados.component.html'
})
export class EmpleadosComponent{
    public nombre_componente = 'Empleados de la empresa';
    public listado_empleados = 'Jordi, Manu y MA';
}
