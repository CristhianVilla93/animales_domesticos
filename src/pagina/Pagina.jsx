
export default function Pagina(props) {
  return (
    <>
      <div className="contenedor">
        <div className="titulo">
          <h1>
            <b>ANIMALES DOMESTICOS</b>
          </h1>
        </div>
        <div className="trajetas">
          <div className="tarjet">
            <div>
              <img src={props.src} alt="" />
            </div>
            <div>
              <samp>Animal:{props.animal}</samp>
            </div>
            <div>
              <p>Descripcion:{props.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
