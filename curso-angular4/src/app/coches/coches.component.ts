import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers:[PeticionesService]
})

export class CochesComponent{
    public coche: Coche;
    public coches: Array<Coche>;

    constructor(
        private _peticionesService: PeticionesService;
    ){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche("Seat León","130","Rojo"),
            new Coche("Volkswagen Golf","105","Negro")
        ];
    }

    ngOnInit(){
        console.log(this._peticionesService.getPrueba());
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }
}
