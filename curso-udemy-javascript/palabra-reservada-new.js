

function Persona(nombre,apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = 30;

  this.imprimirPersona = function(){
    return this.nombre + " " + this.apellido + "(" + this.edad + ")";
  }
}

//LA PALABRA RESERVADA NEW CREA A PARTIR DE LA FUNCION ANTERIOR, CREA UN NUEVO OBJETO. SI NO PONEMOS NEW ESTAMOS INVOCANDO A UNA FUNCION NORMAL, NO CREANDO UN OBJETO.

var juan = new Persona("Jordi","Gisbert");


console.log(juan.imprimirPersona());
