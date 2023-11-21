import React from "react";
import './Inicio.css'

const Inicio = () =>{

    return(
        <>
            <div className="layout">
               <div className="pSection">
               <div className="bienvenida">
                    <p>Bienvenid@ a mi portafolio, espero que disfrutes el contenido.</p>
                </div>
                <div className="cvContainer">
                <button className="bajarB"><img className="bajarI" src="/src/assets/Bajar.png" alt="bajar"/>Descarga mi CV</button>
                </div>
               </div>
               <div className="tecno"><p className="tecnoText">Tecnologías que domino</p></div>
                <div className="technologies">
                    <div className="html tImg">
                        <div><img alt="html 5" src="/src/assets/html-5.png"/>HTML5</div>
                    </div>
                    <div className="css tImg">
                        <div><img alt="css 3" src="/src/assets/css-3.png"/>CSS3</div>
                    </div>
                    <div className="js tImg">
                        <div><img alt="JavaScript" src="/src/assets/js.png"/>JavaScript</div>
                    </div>
                    <div className="react tImg">
                        <div><img alt="react" src="/src/assets/React.png"/>React</div>
                    </div>
                    <div className="vite tImg">
                        <div><img alt="vite" src="/src/assets/vite-js-logo.svg"/>Vite</div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Inicio;