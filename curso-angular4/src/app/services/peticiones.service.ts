import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService {
    public url:string;

    constructor(private _http:Http){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getArticulos(){
        //Con el método map se recupera la respuesta de la petición HTTP
        return this._http.get(this.url).pipe(map(res => res.json()));
    }


}
