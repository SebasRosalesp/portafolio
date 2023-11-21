import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = ()=>{

    return(
        <div className="fondoNav">
            <div className="navContainer">
            <Link className="linkB" to={"Inicio"}>
                <button>Inicio</button>
            </Link>
            <Link className="linkB" to={"Proyectos"}>
                <button>Proyectos</button>
            </Link>
            <Link className="linkB" to={'Resumen'}>
                <button>Resumen</button>
            </Link>
        </div>
        </div>
    )
}

export default Nav;