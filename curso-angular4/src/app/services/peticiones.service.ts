import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService {

    getPrueba(){
        return 'Hola mundo desde el servicio';
    }
}
