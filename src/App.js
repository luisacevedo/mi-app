import logo from './logo.svg';
import './App.css';
import './stylesheets/Testimonio.css'
import {Testimonio} from './components/Testimonio.js'

function App() {
  let userData = require("./text/userData.json");
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Here is what our students say about freeCodeCamp:</h1>
          <Testimonio 
          {...userData.user1} />
          <Testimonio 
          {...userData.user2} />
          <Testimonio 
          {...userData.user3} />
      </div>
    </div>
  );
}

export default App;
