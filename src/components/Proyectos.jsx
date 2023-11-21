import React from "react";
import './Proyectos.css'

const Proyectos = ()=>{

    return(
        <>
            <div className="proyectContainer">
                <div className="proyect">
                    <a href="https://swapi-react.onrender.com/"><img alt="Proyecto Swpai" src="/src/components/assets/swapi.png"/> Swapi React</a>
                    <div className="delay">
                        <p>Proyecto desarrollado en React enfocado en el uso de un API externo para procesar sus datos y mostrarlos de la manera adecuada, en este caso mediante un carrusel</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyectos;