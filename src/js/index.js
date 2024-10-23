//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let unidades = -1;
let decenas = 0;
let centenas = 0;
let miles = 0;
let decenasDeMiles = 0;
let centenasDeMiles = 0;

let cuentaAtras = parseInt(
  prompt("Cuantos segundos quieres estar dentro de la pagina?")
);

let tiempoWeb = cuentaAtras + 1;

const reset = () => {
  clearInterval(intervalo);
  unidades = -1;
  decenas = 0;
  centenas = 0;
  miles = 0;
  decenasDeMiles = 0;
  centenasDeMiles = 0;
  tiempoWeb = cuentaAtras + 1;
  return (intervalo = setInterval(contador, 1000));
};

const stop = () => {
  clearInterval(intervalo);
};

console.log(stop);

const start = () => {
  clearInterval(intervalo);
  return (intervalo = setInterval(contador, 1000));
};

const contador = () => {
  unidades++;
  if (unidades > 9) {
    decenas++;
    unidades = 0;
  }
  if (decenas > 9) {
    centenas++;
    decenas = 0;
  }

  if (centenas > 9) {
    miles++;
    centenas = 0;
  }
  if (miles > 9) {
    decenasDeMiles++;
    miles = 0;
  }
  if (decenasDeMiles > 9) {
    centenasDeMiles++;
    decenasDeMiles = 0;
  }

  if (Number.isInteger(cuentaAtras)) {
    tiempoWeb--;
    if (tiempoWeb === 0) {
      alert("Has agotado tu tiempo en la web");
      location.reload();
    }
  } else {
    cuentaAtras = parseInt(prompt("Ingrese un numero valido"));
  }

  ReactDOM.createRoot(document.getElementById("app")).render(
    <Home
      centenasDeMiles={centenasDeMiles}
      decenasDeMiles={decenasDeMiles}
      miles={miles}
      centenas={centenas}
      decenas={decenas}
      unidades={unidades}
      tiempoWeb={tiempoWeb}
      reset={reset}
      stop={stop}
      start={start}
    />
  );
};

let intervalo = setInterval(contador, 1000);
