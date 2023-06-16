
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
            src={"public/imagenes/caballos.jpg"}
            animal={"Caballo"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={"public/imagenes/cat.jpg"}
            animal={"Cat"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={"public/imagenes/cuy.jpg"}
            animal={"Cuy"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={"public/imagenes/dog.jpg"}
            animal={"Dog"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={"public/imagenes/goat.jpg"}
            animal={"Goat"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={"public/imagenes/loro.jpg"}
            animal={"Loro"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={"public/imagenes/vaca.jpg"}
            animal={"Vaca"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
        </div>   
      </div>
    </>
  );
}

export default App
