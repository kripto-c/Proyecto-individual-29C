import React from "react";
import { filterBreeds, filterCreated, getTemperaments } from "../../redux/actions";
import {useDispatch, useSelector} from 'react-redux';
import filtro from './filtro.css';
import { useEffect } from "react";

export default function Filters({setCurrentPage}){
const allTemperaments = useSelector(state => state.temperaments);
const allBreeds = useSelector(state => state.allBreeds);
const findBreedsDb = allBreeds.some(el => el.createdInDb === true);
const dispatch = useDispatch();

useEffect(()=>{
    if(allTemperaments.length === 0){
      dispatch(getTemperaments())
    }
},[dispatch])

    function handleFilterTemperaments(e) {
        e.preventDefault();
        dispatch(filterBreeds(e.target.value))
        setCurrentPage(1)
   }

   function handleFiltreCreate(e) {
    e.preventDefault();
     if (!findBreedsDb && e.target.value === "Created") {
         alert("there are no breeds created")
     }
    dispatch(filterCreated(e.target.value))
    setCurrentPage(1)
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