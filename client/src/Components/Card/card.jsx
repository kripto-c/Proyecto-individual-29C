import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { confirm } from "react-confirm-box"
import { deletBreeds, filterCreated, getBreeds } from "../../redux/actions";
import cardStyle from "./card.css"

export default function Card({id, link,name,image, temperament, weigth_min, weigth_max, onclick}) {
     const [confirm, setConfirm] = useState(false);


async function handlerClick(id, name) {
        setConfirm(true)
 }

 async function handlerConfirm(e) {
  if (e == "yes") {
    dispatch(deletBreeds(id));
    await dispatch(getBreeds());
    dispatch(filterCreated("Delete"));
  }else{
    setConfirm(false)
  }
}


   const dispatch = useDispatch()
   
    return(
      <>
         {
           confirm && <>
           <div className="confirm-container">
               <h3>{`surely he wants to eliminate the breed ${name}`}</h3>
                   <div className="buttons-comfirm">
                      <button className="comfirm-button" onClick={()=> handlerConfirm("yes")}>Yes</button>
                      <button className="comfirm-button" onClick={()=> handlerConfirm("no")}>No</button>
                   </div>
              </div>
           </>
         }

        <div className="card" onClick={async ()=> onclick ? handlerClick(id, name) : ""}>
          <Link to={link ? `/${link}/${id}`: ""}>
          <div className="card-head">
          <h3 className="card-title">{name}</h3>
          <img src={image ? image : "https://i.pinimg.com/originals/90/8c/10/908c1034a3199e94f49d3ed7715a8a65.jpg"} alt={name} className="card-img"/> 
          </div>
        
          <div className="card-temperament-container">
          <h4 className="card-temperament-title">Temperaments</h4>
          <p className="card-temperament">{typeof temperament == "object" ? temperament.map(e=> e + ", ") : temperament}</p>
          </div>
        
           <div className="card-weight-container">
          <h4 className="card-weight-title">Weight</h4>
           <div className="card-weight">
           <p className="card-weight_min">Min: {weigth_min !== 0 ? weigth_min : "does not have"}{weigth_min !== 0 ?" Kg":""}</p>
           <p className="card-weight_max">Max: {weigth_max !== 0 ? weigth_max : "does not have"}{weigth_max !== 0 ?" Kg":""}</p>
           </div>
           </div>
          </Link>
       </div>
      </>
    );
   }
   
