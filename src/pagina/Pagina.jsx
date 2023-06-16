
export default function Pagina(props) {
  return (
    <>
      <div>
        <div>
          <h1>
            <b>ANIMALES DOMESTICOS</b>
          </h1>
        </div>
        <div>
          <div>
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
