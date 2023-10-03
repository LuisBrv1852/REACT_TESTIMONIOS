import './App.css';
import{Testimonio} from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Personas que se superaron y aprendieron a programar </h1>
        <Testimonio
        nombre='Shawn'
        pais='Singapur'
        imagen='Shawn'
        cargo='Ingenierio de software'
        empresa='Amazon'
        testimonio='Me daba miedo cambiar de carrera'
        />
        <Testimonio
        nombre='Sarah'
        pais='Nigeria'
        imagen='Sarah'
        cargo='Ingenieria de software'
        empresa='ChatDesk'
        testimonio='Siempre quise empezar a aestudiar programación'
        />
        <Testimonio 
          nombre='Emma'
          pais='Suecia'
          imagen='Emma'
          cargo='Ingenieria de software'
          empresa='Spotify'
          testimonio='Siempre me costo aprender javascript '
          />
      </div>
    </div>
  );
}

export default App;
