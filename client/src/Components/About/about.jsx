import React from "react";
import { Link } from "react-router-dom";
import aboutSyle from "./about.css"

export default function About() {
     return(
        <div className="card-about-container">
         <Link to={"/home"}>
         <button className="button-back b">back Home</button>         
         </Link>

            <div className="card-about">
            <div className="card-description">
                <div className="card-text">
                <h2 className="card-title">DogPedia</h2>
                <p className="card-p">una SPA (Single Page Application) usando React JS en Front End y Node Js-Express en Back End. El diseño se realizó aplicando exclusivamente CSS: no librerías externas.
                <br /><br />
                Este SPA consume datos de una API externa  y utiliza la base de datos PostgressSQL administrada por Sequelize.
Principales características del proyecto: <strong className="strong">Barra de búsqueda, Temperamentos y filtros, formulario controlado para la creación de nuevas razas de perro que se pueden guardar como nuevo registro en la base de datos y un apartado para la eliminacion de las mismas.</strong></p>
                </div>
                <div className="card-tecnologi">
                    <div className="react-logo">React</div>
                    <div className="redux-logo">Redux</div>
                    <div className="sequelize-logo">sequelize</div>
                    <div className="Css">Css3</div>
                    <div className="apiDog">Api Dogs</div>
                </div>
            </div>
            </div>

             <h4 style={{color: "white"}}>Page created by <a href="https://www.linkedin.com/in/miguel-gutierrez-6b231521a/" className="linkedin" target="_black">Miguel Gutierrez</a> © 2022. All Rights Reserved.</h4>
        </div>
     );
}

// Page created by Nahuel61920

// © 2022. All Rights Reserved.