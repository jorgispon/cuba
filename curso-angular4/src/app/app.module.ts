import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Para el Two Way Data Binding
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
