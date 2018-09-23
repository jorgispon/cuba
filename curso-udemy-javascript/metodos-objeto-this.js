var nombre = "Juan Carlos";

//EL THIS LO QUE HACE ES COGER EL NOMBRE DEL OBJETO EN EL QUE SE ENCUENTRA

var persona = {
  nombre:"Maria",
  apellido:"Dubon",
  imprimirNombre: function(){
    console.log(this.nombre + " " + this.apellido);
  },
  direccion:{
    pais: "Costa Rica",
    obtenerPais: function(){
      console.log("La direccion es " + this.pais);

      var nuevaDireccion = function(){
        console.log(this);
      }

      nuevaDireccion();
  }
}
};


persona.imprimirNombre();
persona.direccion.obtenerPais();
