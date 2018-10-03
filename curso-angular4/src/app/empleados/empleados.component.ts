import { Component } from '@angular/core';
import { Empleado } from './empleado'; //Es el empleado.ts, no el nombre de la carpeta

@Component({
    selector: 'empleados',
    templateUrl: './empleados.component.html'
})
export class EmpleadosComponent{
    public nombre_componente = 'Empleados de la empresa';
    public listado_empleados = 'Jordi, Manolo y Ana';

    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;

    constructor(){
        this.empleado = new Empleado('Jordi Gisbert Ponsoda', 23, 'Programador', true);
        this.trabajadores = [
                new Empleado('Jordi Gisbert Ponsoda', 23, 'Programador', true);
                new Empleado('Manolo Martínez Valero', 35, 'Administrativo', false);
                new Empleado('Ana Serrano Fernández', 37, 'Directiva', true);
        ];

        this.trabajador_externo = true;
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
}
