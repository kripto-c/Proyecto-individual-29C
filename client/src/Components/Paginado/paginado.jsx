import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useSelector } from "react-redux";
import { GetNumPag } from "../../redux/actions";
import paginado from './paginado.css';

export default function Paginado({breedsPerPage, allBreds, paginado, dispatch, act}) {
     const pageNumber = [];
     const [active, setActive] = useState(act.length ==  0 ? "" : act );
         // el numero redondo de todas las razas entre el numero de razas que quiero renderizar    
     for (let i = 1; i <= Math.ceil(allBreds / breedsPerPage); i++) {
         pageNumber.push(i)        
     }

function handlerACtiveSyleClick(num){
        setActive(num); 
        dispatch(GetNumPag(num))
}   


     return(
           <nav className="paginado-container">
             <ul className="paginado-ul">
               {
                pageNumber && pageNumber.map(num => {
                    return(
                        <li className={`number ${active == num ? "active-click" : "" }`} key={num} onClick={()=> handlerACtiveSyleClick(num)}>
                            <a onClick={()=> paginado(num)}

                          className={`paginado`}>{num}</a>
                        </li>
                    );
                })
               }
             </ul>
           </nav>
     );
}