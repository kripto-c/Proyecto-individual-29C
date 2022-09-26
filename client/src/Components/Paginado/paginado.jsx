import React from "react";
import { useState } from "react";
import {useSelector } from "react-redux";
import { GetNumPag } from "../../redux/actions";
import paginado from './paginado.css';

export default function Paginado({breedsPerPage, allBreds, paginado, dispatch, previousPage, followingPage, active,setActive, act}) {
     const pageNumber = [];
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
         <div className='classDivButton' >
         <button className='classButton1' onClick={()=> previousPage()} >{'<<'}</button>
         </div>
             <ul className="paginado-ul">
               {
                pageNumber && pageNumber.map(num => {
                    return(
                        <li className={`number ${active == num ? "active-click" : "" } ${act == 0 && num == active ? "nou" : ""}`} key={num} onClick={()=> handlerACtiveSyleClick(num)}>
                            <a onClick={()=> paginado(num)}

                          className={`paginado`}>{num}</a>
                        </li>
                    );
                })
               }
             </ul>
             <div className='classDivButton'>
         <button className='classButton2' onClick={()=>followingPage()} >{'>>'}</button>
      
         </div>
           </nav>
     );
}