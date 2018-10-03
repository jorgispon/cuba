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
        console.log(this.nombre + " tiene " + this.edad + " años.");

        //Variables y alcance (nivel bloque codigo/instruccion o alcance global)
        var uno = 8;
        var dos = 15;

        if(uno === 8){
            let uno = 3; //LA VARIABLE LET ACTUA DENTRO DEL BLOQUE DE CODIGO DEL IF, NO FUERA DEL IF, NI ANTES NI DESPUES
            var dos = 88;
            console.log("DENTRO DEL IF: " + uno);
        }

        console.log("FUERA DEL IF: " + uno);

    }

    cambiarNombre(nombre){
        this.nombre = 'Ivan';
    }

    cambiarEdad(edad){
        this.edad = edad;
    }
}
