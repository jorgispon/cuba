//Funcion de primer nivel, primera letra de la funcion en mayuscula.
function Jugador(nombre) {
  this.nombre = nombre;
  this.vida = 100;
  this.magia = 100;


  this.curar = function(jugadorObjetivo) {

    if (this.magia >= 40) {
      //El this apunta al objeto que esté haciendo la acción de curar
      this.magia -= 40;
      jugadorObjetivo.vida += 20;
    } else {
      console.info(this.nombre + " no tiene puntos de magia.");
    }
    this.estado(jugadorObjetivo);
  }

  this.tirarFlecha = function(jugadorObjetivo) {

    if (jugadorObjetivo > 40) {
      jugadorObjetivo.vida -= 40;

    } else {
      jugadorObjetivo.vida = 0;
      console.error(jugadorObjetivo.nombre + " ha muerto.");
    }
    this.estado(jugadorObjetivo);
  }
  this.estado = function(jugadorObjetivo) {
    console.log(this);
    console.info(jugadorObjetivo);
  }
}


var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);