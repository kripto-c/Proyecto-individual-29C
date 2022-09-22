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
                <p className="card-p">This SPA consumes data from an external API and uses the PostgressSQL database managed by Sequelize.
Main characteristics of the project: <strong className="strong">Search bar, Temperaments and filters, controlled form for the creation of new dog breeds that can be saved as a new record in the database and a section for the elimination of the same.</strong></p>
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