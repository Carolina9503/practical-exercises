import logo from './logo.svg';
import './App.css';

function App() {
   const cpu = Math.floor(Math.random() * (4 - 1)) + 1
   const jugador = Number(prompt("Escoge una opcion donde: piedra = 1, papel = 2 y tijera = 3"));
   
  
  const jugarPiedraPapelOtigera = (jugador, cpu) => {
  
    if (jugador !== cpu) {
      if (jugador === 1 && cpu === 2) {
        console.log("Perdiste");        
      } else if(jugador === 1 && cpu === 3) {
        console.log("Ganaste");
      }else if(jugador === 2 && cpu === 1){
        console.log("Ganaste");
      }else if(jugador === 2 && cpu === 3){
        console.log("Perdiste");
      }else if(jugador === 3 && cpu === 1){
        console.log("perdiste");
      }else if (jugador === 3 && cpu === 2){
        console.log("Ganaste");
      }      
    }else{
      console.log("Esto es un empate")
    }

  }
  console.log(jugarPiedraPapelOtigera(jugador, cpu));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
