
import './App.css'
import Pagina from './pagina/pagina'

function App() {

  return (
    <>
      <div className="contenedor">
        <div className="titulo">
          <h1>
            <b>ANIMALES DOMESTICOS</b>
          </h1>
        </div>
        <div className="trajetas">
          <Pagina
            src={"src/imagenes/caballos.jpg"}
            animal={"Caballo"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
        </div>   
      </div>
    </>
  );
}

export default App
