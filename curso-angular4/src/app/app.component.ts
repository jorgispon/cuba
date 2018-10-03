import { Component } from '@angular/core'; // <-- PAQUETE QUE INSTALA NPM

@Component({   // <-- DECORADOR
  selector: 'app-root', // <-- ESTO ES UN METADATO, INDICAMOS QUÉ ETIQUETA UTILIZAMOS PARA CARGAR EL COMPONENTE
  templateUrl: './app.component.html', // <-- PERMITE ASIGNAR UNA PLANTILLA HTML PARA IMPRIMIR LA INFORMACIÓN
  styleUrls: ['./app.component.css'] // <-- DEFINIMOS SERIE DE FICHEROS CSS, ESTE SOLO SERA VISIBLE EN EL COMPONENTE EN CUESTIÓN
})
export class AppComponent {
  title = 'Component base principal';
}
