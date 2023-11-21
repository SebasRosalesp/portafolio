import React from "react";
import './Resumen.css'

const Resumen = ()=>{

    return(
        <>
            <div className="layoutResumen">
                <div className="sobre">
                    <h1>Un poco sobre mi</h1>
                    <p>
                        Soy un desarrollador Front End entry Level orientado a objetivos con conocimientos de
                        HTML, CSS, JavaScript y React, que busca utilizar la competencia técnica y la
                        creatividad para desarrollar experiencias de usuario atractivas y avanzar en una
                        carrera profesional. Buscando aprovechar la depuración efectiva, la
                        optimización del código y las capacidades de colaboración en proyectos para
                        producir aplicaciones que superen las expectativas del usuario.
                    </p>
                </div>
                <div className="divisor"/>
                <div className="contacto">
                    <h1>Contacto</h1>
                    <ul>
                        <li> <img alt="telefono" src="https://i.imgur.com/vkJsQGU.png"/> Teléfono<span><a href="tel:+50684322292">+50684322292</a></span></li>
                        
                        <li><img src='https://i.imgur.com/gtRR2mL.png'alt="LinkedIn"/><span>LinkedIn </span><a href="www.linkedin.com/in/sebastián-rosales-parra-9b901420b">Sebastián Rosales Parra</a></li>
                        <li><img alt="email"src="https://i.imgur.com/8UUjCsu.png"/> E-mail<span><a href="mailto:sebas.front.dev@gmail.com">sebas.front.dev@gmail.com</a></span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Resumen;