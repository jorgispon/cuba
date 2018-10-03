import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:string = 'Jordi Gisbert Ponsoda';
    public edad:number = 23;
    public mayorDeEdad:boolean = true;
    public trabajos:Array<string> = ['Carpintero','Albañil', 'Fontanero'];
    public varios:Array<any> = ['Carpintero', 4, 23, 'Fontanero'];
}
