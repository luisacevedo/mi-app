import logo from './logo.svg';
import './App.css';
import './stylesheets/Testimonio.css'
import {Testimonio} from './components/Testimonio.js'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros estudiantes sobre freeCodeCamp:</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
