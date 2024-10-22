//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { string } from "prop-types";

//render your react application
let unidades = 0;
let decenas = 0;
let centenas = 0;
let miles = 0;
let decenasDeMiles = 0;
let centenasDeMiles = 0;
let cuentaAtras = parseInt(prompt("Cuantos segundos quieres estar dentro de la pagina?"));


setInterval(() => {

    unidades ++;
    if (unidades>9){
        decenas ++;
        unidades=0;
    }
    if (decenas>9){
        centenas++
        decenas=0;
    }
    
    if (centenas>9){
        miles++
        centenas=0;
    }
    if (miles>9){
        decenasDeMiles++
        miles=0;
    }
    if (decenasDeMiles>9){
        centenasDeMiles++
        decenasDeMiles=0;
    }

    if (Number.isInteger(cuentaAtras)){
        cuentaAtras --;
        if (cuentaAtras===0){
            alert("Has agotado tu tiempo en la web");
            location.reload();
        }
    } else {
        cuentaAtras = parseInt(prompt("Ingrese un numero valido"));
    }

    ReactDOM.createRoot(document.getElementById('app')).render(<Home
        centenasDeMiles={centenasDeMiles}
        decenasDeMiles={decenasDeMiles}
        miles={miles}
        centenas={centenas}
        decenas={decenas}
        unidades={unidades}
        cuentaAtras={cuentaAtras}/>);
}, 1000);





