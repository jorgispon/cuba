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
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('Jordi Gisbert Ponsoda', 23, 'Programador', true);
        this.trabajadores = [
                new Empleado('Jordi Gisbert Ponsoda', 23, 'Programador', true),
                new Empleado('Manolo Martínez Valero', 35, 'Administrativo', false),
                new Empleado('Ana Serrano Fernández', 37, 'Directiva', true)
        ];

        this.trabajador_externo = true;
        this.color = 'blue'; //Según el color que ponga yo aquí el ngSwitch actuará y lo modificará -->
        this.color_seleccionado = '#D8D8D8';
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}
