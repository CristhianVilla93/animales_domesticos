
export default function Pagina(props) {
  return (
    <>
      
        <div className="tarjet">
          <div className="cuadroimg">
            <img className="img" src={props.src} alt="" />
          </div>
          <div>
            <samp>Animal:{props.animal}</samp>
          </div>
          <div>
            <p>Descripcion:{props.descripcion}</p>
          </div>
        </div>
      
    </>
  );
}
