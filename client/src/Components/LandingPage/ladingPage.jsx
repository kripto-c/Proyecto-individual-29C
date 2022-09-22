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
             <h1 className="lading-title">DogsPedia</h1>
             <p className="lading-descriptions">it is a SPA that consumes data from a Rest Api, the App has its own database,
that require certain types of information, the application has the functionality of
 filter the information according to certain criteria, also having a functionality to create or eliminate dog breeds, offering the characteristics that they consider pertinent.
 <br /><br />
For this I used all the known technologies in Henry's Bootcamp, which covers backend and frontend</p>
             <Link to="/home" className="lading-container-button" >
              <button className="lading-button">Get in</button>
              </Link>
        </div> 
      </div>
      );
}