import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getNameBreeds, clearErrors } from "../../redux/actions";
import { useEffect } from "react";
import detailStyle from "./detail.css"
import Loading from '../loading/loading'
import PagnoFound from "../PagNoFound/PagnoFound"

export default function Detail() {
   const {id} = useParams()
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDetail(id))
    }, [dispatch])
     
    const myBreed = useSelector((state)=> state.details);

   
if(myBreed.message) return <PagnoFound reset={clearErrors}/>
else return(
         <div className="detail-container">
            {
               myBreed.length > 0 && <h2 className="detail-name-title" key={id}>{myBreed[0].name}</h2>
            }
            {
              myBreed.length > 0 ?
               <div className="detail-card" key={id + 1}>
                     
                      {/* start */}
                <div className="container-start">
          
                 <div className="detail-height">
                 <h3 className="detail-height-title">Height</h3>
                 <p className="datail-height-min">Min {myBreed[0].height.min}Cm</p>
                 <p className="datail-height-max">Max {myBreed[0].height.max}Cm</p>
                 </div>
                 <div className="detail-weight">
                   <h3 className="datail-weight-title">Wight</h3>
                  <p className="detail-weight-min">Min {myBreed[0].weight.min}Kg</p>
                  <p className="detail-weight-max">Max {myBreed[0].weight.max}Kg</p>
                 </div>
                </div>

                     {/*mid*/}
                <div className="container-mid">
                <img src={myBreed[0].img ? myBreed[0].img:"https://i.pinimg.com/originals/90/8c/10/908c1034a3199e94f49d3ed7715a8a65.jpg"} alt={myBreed[0].name} height="100px" width={"100px"} className="datail-img"/>
                </div>

                              {/* end */}
                  <div className="container-end">
                 <div className="detail-temperaments">
                  <h3 className="detail-temperaments-title">Temperament</h3>
                  {
                  myBreed[0].temperament && !Array.isArray(myBreed[0].temperament) ? myBreed[0].temperament.split(",").map(e=> <p>{e}</p>) : myBreed[0].temperament.map(e=> <p>{e}</p>) 
                  }
                 </div>
                 <div className="detail-life">
                  <h4>Life Span</h4>
                 {myBreed[0].life_span.min && <p>Min {myBreed[0].life_span.min} Years</p>}
                 {myBreed[0].life_span.max && <p>Max {myBreed[0].life_span.max} Years</p>}
                 </div>
                </div>

              </div> : <Loading key={id + 1} />
            }
            <Link to='/home' key={id + 2} >
                <button className="button-back" onClick={()=>{
                    dispatch(getDetail(0))
                     dispatch(clearErrors())
                    }} >Back Home</button>
            </Link>
        </div>
    );
}