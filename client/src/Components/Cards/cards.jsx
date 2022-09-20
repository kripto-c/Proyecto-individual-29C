import React from "react";
import Card from "../Card/card";
import { Link } from "react-router-dom";
import cardsStyle from "./cards.css"

export default function Cards({breeds}) {
    return(
         <div className="Cards">
               {
                  breeds?.map(el=>{
                    return(
                      <>
                    <Card id={el.id}  name={el.name}  image={el.img} temperament={el.temperament} weigth_min={el.weight.min} weigth_max={el.weight.max} />
                      </>
                     );
                  })
               }
         </div>
    );
}