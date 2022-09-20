import React from "react";
import { filterBreeds, filterCreated, getTemperaments } from "../../redux/actions";
import {useDispatch, useSelector} from 'react-redux';
import filtro from './filtro.css';
import { useEffect } from "react";

export default function Filters({setCurrentPage}){
const allTemperaments = useSelector(state => state.temperaments);
const dispatch = useDispatch();

useEffect(()=>{
    if(allTemperaments.length === 0){
      dispatch(getTemperaments())
    }
},[dispatch])

    function handleFilterTemperaments(e) {
        e.preventDefault();
        dispatch(filterBreeds(e.target.value))
   }

   function handleFiltreCreate(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value))
}


    return(
        <div className="filter-subcontainer">
    <select className="classSelectFilt" onChange={e=> handleFiltreCreate(e)}>
            <option className="classOptionFilt" disabled selected value="Order By Breed">Order By Breed </option>
            <option className="classOptionFilt" value="All">All</option>
            <option className="classOptionFilt" value="Existing">Existing</option>
            <option className="classOptionFilt" value="Created" >Created</option>
  </select>
    
                {/* //filtrado de temperamentos               */}
        <select onChange={e => handleFilterTemperaments(e)} className='classSelectFilt'>
            <option disabled selected defaultValue>Order By Temperament</option>
            <option value="All">All</option>
            {
              allTemperaments?.map(temp => (
                <option value={temp.name} key={temp.id}>{temp.name}</option>
              ))
            }
        </select>             
   </div>

    );
}