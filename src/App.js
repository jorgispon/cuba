import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  }

  // Cuando la aplicación carga
  componentDidMount() {
    const citasLocalStorage = localStorage.getItem('citas');
    if(citasLocalStorage) {
      this.setState({
        citas : JSON.parse(citasLocalStorage)
      })
    }
  }

  // Cuando eliminamos o agregamos una cita
  componentDidUpdate() {
    // Storage no soporta arrays, solo Strings, hay que convertirlo
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

crearNuevaCita = datos => {
  // Copiar el state actual
  const citas = [...this.state.citas, datos];

  // Agregar el nuevo state
  this.setState({
    citas
  })
}

// Elimina las citas del state
eliminarCita = id => {

  // Hacer copia del state
  const citasActuales = [...this.state.citas];

  /* Utilizar filter para sacar el elemento id del array
   El filter lo que hace es buscar los registros del array que no tengan ese id, 
  los extrae y los mete en la const 'citas', por lo que el que tenía ese id se borra, es lo que queremos */
  const citas = citasActuales.filter(cita => cita.id !== id);

  // Actualizar el state
  this.setState({citas});
}

  render() { 
    return (  
      <div className="containter">
        <Header
          titulo='Administrador Pacientes Veterinaria'
          />

      <div className="row">
        <div className="col-md-10 mx-auto">
          <NuevaCita 
            crearNuevaCita={this.crearNuevaCita}
          />
        </div>

        <div className="mt-5 col-md-10 mx-auto">
          <ListaCitas 
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
          />
        </div>
      </div>
      </div>
    );
  }
}
 
export default App;
