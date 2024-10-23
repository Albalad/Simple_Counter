import React from "react";

//create your first component

const Home = ({
  unidades,
  decenas,
  centenas,
  miles,
  decenasDeMiles,
  centenasDeMiles,
  tiempoWeb,
  reset,
  stop,
  start,
}) => {
  return (
    <div>
      <div className="cuentaAtras">
        <p>Tiempo para seguir conectado a la WEB: {tiempoWeb}</p>
      </div>

      <h1 className="col-12">Contador de segundos dentro de la pagina:</h1>

      <div className="principal">
        <div className="icono"></div>

        <div className="contador">
          <div className="numeros">
            <p className="segundos">{centenasDeMiles}</p>
          </div>

          <div className="numeros">
            <p className="segundos">{decenasDeMiles}</p>
          </div>

          <div className="numeros">
            <p className="segundos">{miles}</p>
          </div>

          <div className="numeros">
            <p className="segundos">{centenas}</p>
          </div>

          <div className="numeros">
            <p className="segundos">{decenas}</p>
          </div>

          <div className="numeros">
            <p className="segundos">{unidades}</p>
          </div>
        </div>
      </div>
      <div className="botones">
        <div>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
        <div>
          <button className="stop" onClick={stop}>Parar</button>
        </div>
        <div>
          <button className="start" onClick={start}>Volver a iniciar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
