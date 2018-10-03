import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<string> = ['Carpintero','Albañil', 'Fontanero'];
    public varios:Array<any> = ['Carpintero', 4, 23, 'Fontanero'];
    comodin:any;

    constructor(){
        // console.log(this.trabajos); // <-- con this accedemos al objeto FrutaComponent y accedemos al parametro trabajos.
        this.nombre = 'Jordi Gisbert Ponsoda';
        this.edad = 23;
        this.mayorDeEdad = true;
        this.comodin = 'SI';
    }

    ngOnInit(){ //PRIMER MÉTODO QUE SE LANZA TRAS EL CONSTRUCTOR, IDEAL PARA LLAMADAS AJAX A SERVICIOS Y COSAS ASÍ
        this.cambiarNombre(); //NO ES UNA BUENA PRÁCTICA LLAMAR A LOS MÉTODOS DENTRO DEL CONSTRUCTOR, PARA ELLO TENEMOS EL MÉTODO ngOnInit
        this.cambiarEdad(45);
        alert(this.nombre + " tiene " + this.edad + " años.");
    }

    cambiarNombre(nombre){
        this.nombre = 'Ivan';
    }

    cambiarEdad(edad){
        this.edad = edad;
    }
}
