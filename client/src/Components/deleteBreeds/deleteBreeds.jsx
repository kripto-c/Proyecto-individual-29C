import React from "react";
import Cards from "../Cards/cards";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { filterCreated, getBreeds } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function DeleteBreeds(){
    const dispatch = useDispatch()
    const breedsDb = useSelector(state=> state.breeds)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
          if (breedsDb.length === 0) {
            await dispatch(getBreeds())
             dispatch(filterCreated("Delete"))
          }else{
            dispatch(filterCreated("Delete"))
          }
    },[dispatch])

    return(
         <>
         <h2 className="home-title">Breeds Created</h2>
         {
         breedsDb.length !== 0 ? <Cards breeds={breedsDb} onclick={true}/>: <h2 className="notFound-errror">No Breeds Created</h2>
         }
         <Link to={'/home'}>
          <button className="notFound-back-home" onClick={()=> dispatch(getBreeds())}>Back home</button>
         </Link>
        </>
    );
}