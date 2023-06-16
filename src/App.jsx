import caballos from "../public/imagenes/caballos.jpg"
import cat from "../public/imagenes/cat.jpg"
import cuy from "../public/imagenes/cuy.jpg"
import dog from "../public/imagenes/dog.jpg"
import goat from "../public/imagenes/goat.jpg"
import loro from "../public/imagenes/loro.jpg"
import vaca from "../public/imagenes/vaca.jpg"



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
            src={caballos}
            animal={"Caballo"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={cat}
            animal={"Cat"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={cuy}
            animal={"Cuy"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={dog}
            animal={"Dog"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={goat}
            animal={"Goat"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={loro}
            animal={"Loro"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
          <Pagina
            src={vaca}
            animal={"Vaca"}
            descripcion={"Otro de los animales domésticos más significativos de nuestra historia, asociado a la fuerza, la velocidad y el espíritu salvaje, sirvió de transporte al humano durante milenios, ya fuera montándolo directamente o usándolo como tracción de diversos vehículos a ruedas (carretas, carrozas, etc)"}
          />
        </div>   
      </div>
    </>
  );
}

export default App
