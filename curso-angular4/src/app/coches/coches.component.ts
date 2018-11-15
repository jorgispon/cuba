import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html'
})

export class CochesComponent{
    public coche: Coche;
    public coches: Array<Coche>;

    constructor(){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche("Seat León","130","Rojo"),
            new Coche("Volkswagen Golf","105","Negro")
        ];
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }
}
