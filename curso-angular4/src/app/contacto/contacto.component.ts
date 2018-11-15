import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo = "Página de contacto de la web";
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    //La flecha es porque estamos usando una función de flecha, en ella no hay que poner la palabra function,
    //y nos permite acceder a los parametros de la clase, en este caso paramtro y titulo, por ejemplo.
    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.parametro = params['page'];
        });
    }
}
