import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getBreeds, orderAlphabetical, orderWeigth, GetNumPag} from "../../redux/actions";
import Paginado from "../Paginado/paginado";
import Filters from "../Filtro/filtro";
import Navbar from "../Nav/navbar";
import homeStyle  from './home.css'
import Loading from "../loading/loading";
import Cards from "../Cards/cards";
import { animateScroll as scroll} from "react-scroll";

export default function Home() {
    const dispatch = useDispatch();
    //  llamada del estado breed
    const allBreeds =  useSelector(state=> state.breeds)
      // llamado del estado numpage esto guardara el numero de pag del  la ultima que pagVisitada
    let numPagState =  useSelector(state => state.numPag);
    //  filtramos las razas que esten seteadas en  null
    const all = allBreeds.filter(e=> e !== null)
 
    const [order, setOrder]= useState("");
   const [currentPage, setCurrentPage] = useState(numPagState  == 0  ? 1 : numPagState);
    const [breedsPerPage, setBreedsPerPage] = useState(8);
    const [activeFiltro, setActiveFiltro ] = useState(false)
  
   const indexLastBreed = currentPage * breedsPerPage;//indice del el ultimo breeds
   const indexOfFirstBreed = indexLastBreed - breedsPerPage;// indice del primer breeds
   const currentBreeds =  allBreeds.slice(indexOfFirstBreed, indexLastBreed);

   const paginado = (pageNumber)=>{
     setCurrentPage(pageNumber);
   }
      //  si  no existe nada dentro de razas llamar para que se carge ese estado de lo contrario si existe no llamar
    useEffect(()=>{
        if(allBreeds.length === 0){
          dispatch(getBreeds());
        }
    },[dispatch])
   
      // disparador de filtro por name
function handlerOrderAlphabetical(e) {
  e.preventDefault();
  dispatch(orderAlphabetical(e.target.value))
  setOrder(`Ordenado ${e.target.value}`);
  setCurrentPage(1);
  dispatch(GetNumPag(0))
}

        // disparador filtro de orden con peso
function handleOrderByWeight(e){
  e.preventDefault();
  dispatch(orderWeigth(e.target.value));
  setOrder(`Ordenado ${e.target.value}`);
  setCurrentPage(1);
  dispatch(GetNumPag(0))

};

  //  activado de menu de filtros
function handlerActiveF(e) {
  e.preventDefault()
   setActiveFiltro(!activeFiltro)
  }

    //  boton  redirigiendo al top de la pag
function onClickUp() {
  const scrollType = {   duration:2000,   delay: 50,   smooth: true,  offset: -10,};
     scroll.scrollTo(false, scrollType);
}

function reload(e) {
    e.preventDefault()
    dispatch(getBreeds())
    setCurrentPage(1)
    dispatch(GetNumPag(0))
}

  return(
     <div className="home-fondo">
              {/* nav */}
          
            <div className="nav">
            <div className="nav-filters">
           <Navbar setpage={setCurrentPage}/>
           {            
          activeFiltro && all.length > 0 ? 
         <>
         <button className="buton_filtro disable" disabled>filtered Search</button>
           <div className="filter-container">
           <button className="close" onClick={e => handlerActiveF(e)}>X</button>
           <Filters setCurrentPage={setCurrentPage}/>
            <div className="filter-subcontainer">
            <select onChange={e=> handlerOrderAlphabetical(e)} className="select-container">
           <option disabled selected defaultValue>
             Alphabetical order
           </option>
           <option value="A-Z">A-Z</option>
           <option value="Z-A">Z-A</option>
         </select>
         
         <select onChange={e => handleOrderByWeight(e)} className="select-container">
           <option disabled selected defaultValue>
             Filter by weight
           </option>
           <option value="Highest">Highest To Lowest</option>
           <option value="Lowest">Lowest To Highest</option>
         </select>
             </div>  
          </div>
            
         </>: <button className="buton_filtro" onClick={e => handlerActiveF(e)}>filtered Search</button>
         }  
            </div>

           </div>
                   
                   {/* title */}
        <h1 className="home-title">DOGSPEDIA</h1>
         {/* <button onClick={e=> handleClick(e)}>Reload</button> */}
            
                    {/* paginado */}
         {  
      all.length > 0 ? <Paginado breedsPerPage={breedsPerPage} allBreds={all.length} paginado={paginado} dispatch={dispatch} act={numPagState.length == 0 ? 0 : numPagState} /> : <Loading/>
             
           }
   
                       {/* Cards */}
            {
             currentBreeds.length !== 0 && <Cards breeds={currentBreeds} link={"home"} />
            }
          
            {/* button arrow */}
        {   
           all.length > 0 && 
             <button onClick={()=> onClickUp()}className="button-top"></button>
        }
        <button onClick={(e)=> reload(e)} className="button-clear">Clear filters</button>            

    </div>
  )
 
}
