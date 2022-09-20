import React from "react";
import { Link } from "react-router-dom";
import ladingPage  from "./ladingPage.css"
import one from "../../images/1.jpg";
import two from "../../images/2.jpg";
import three  from "../../images/3.jpg";
import five from "../../images/5.jpg";
import eight from "../../images/8.jpg";
import nine from "../../images/9.jpg";
import ten  from "../../images/10.jpg"

let imagesUrl=[one, two, three, five, eight, nine, ten];

let img = imagesUrl[Math.floor(Math.random() * imagesUrl.length)]

export default function LandigPage() {

      return(
      <div className="lading-fondo" style={{backgroundImage: `url(${img})`}}>
        <div className="lading-container">
             <h1 className="lading-title">Dogs App</h1>
             <p className="lading-descriptions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis necessitatibus facilis provident officiis unde, fugit assumenda, iure porro quis aspernatur, neque impedit eaque enim animi facere? Inventore, perferendis. Ratione, sunt?</p>
             <Link to="/home" className="lading-container-button" >
              <button className="lading-button">Get in</button>
              </Link>
        </div> 
      </div>
      );
}