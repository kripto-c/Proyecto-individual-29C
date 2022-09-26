import React from "react";
import { Link, Navigate } from "react-router-dom";
// import { confirm } from "react-confirm-box"
import { getBreeds, getTemperaments, postBreeds } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import validator from "./validator.js";
import BreedsCreateStyle from './breedsCreate.css'


export default function  BreedsCreate(){
       const dispatch = useDispatch();
       const breed = useSelector(state=> state.breeds);
       const list = breed.map(e=> e.name);
       const temperaments = useSelector(state=> state.temperaments);
       const [button, setButton] = useState(true);
       const [input, setInput]= useState({
        name:"",
        height_min:"",
        height_max:"",
        weight_min:"",
        weight_max:"",
        life_span_min:"",
        life_span_max:"",
        image:"",
        temperament:[],
        success:false
       })
            //  estado de ventana confirm
       const [confirm, setConfirm] = useState(false);
 

        //    manejo de errores
       const [errors, setErrors] = useState({})

       useEffect(()=>{
         if (temperaments.length === 0) {
            dispatch(getTemperaments())       
         }
         dispatch(getBreeds())
       },[dispatch])

       useEffect(()=>{
        if (input.name.length > 0 && input.height_min.length > 0  && input.height_max.length > 0 && input.weight_min.length > 0 && input.weight_max.length > 0) setButton(false)
        else setButton(true)
    }, [input, setButton]);


function handleChange(e) {
     setInput({
        ...input, [e.target.name]: e.target.value
     })
     setErrors(validator({
        ...input, [e.target.name]:e.target.value
     }))
 
}

function handlerSelect(e) {
        setInput({
           ...input,
           temperament:[...input.temperament, e.target.value]
        })
          
}

async function handlerSubmit(e) {
    e.preventDefault()
   if (list.includes(input.name)) {
      alert(`the breed ${input.name} already exists, you cannot add it`)
      return
   }else{
  await dispatch(postBreeds(input))
  dispatch(getBreeds())
  setConfirm(true)
  }

}

function deleteListTemps(e) {
    e.preventDefault()
   let obj = input.temperament.filter(elem=> elem !== e.target.text);
  setInput({
    ...input,
     temperament:obj
  })
}

function handlerConfirm(e) {
     if (e == "yes") {
           setInput({
            name:"",
            height_min:"",
            height_max:"",
            weight_min:"",
            weight_max:"",
            life_span_min:"",
            life_span_max:"",
            image:"",
            temperament:[],
            success:true
        })
     }else{
      setInput({
        name:"",
        height_min:"",
        height_max:"",
        weight_min:"",
        weight_max:"",
        life_span_min:"",
        life_span_max:"",
        image:"",
        temperament:[],
        success:false
    })
       setConfirm(false)
     }
}



if (input.success) {
    return <Navigate to={`/home`} replace />
}else  return(
          <div className="form-container">
             {
              confirm && <div className="confirm-container">
               <h3>{`The breed ${input.name} was successfully added`}
                     <br />{`do you want to go home?`}</h3>
                   <div className="buttons-comfirm">
                      <button className="comfirm-button" onClick={()=> handlerConfirm("yes")}>Yes</button>
                      <button className="comfirm-button" onClick={()=> handlerConfirm("no")}>No</button>
                   </div>
              </div>
             }
            <h1 className="form-title">Create breed</h1> 
            <form  onSubmit={e=> handlerSubmit(e)} className="formulario">
                 <div className="container-input c-input-name">
                    <label className="label-name">Name</label>
                    <input type="text" placeholder="name..." className="input input-name" value={input.name} name="name" onChange={e=> handleChange(e)} required/>
                    {
                    errors.name && (<p className="form-error">{errors.name}</p>)
                    }
                </div>
                <div className="container-input c-input-heigth">
                    <label>Height</label>
                   <div className="container-height">
                   <input type="number" placeholder="centimeter min" value={input.height_min} name="height_min" onChange={e=> handleChange(e)} required className="input input-heigth-min" min={15} max={80}/>
                    <input type="number" placeholder="centimeter max" value={input.height_max} name="height_max" onChange={e=> handleChange(e)} required className="input input-heigth-max"  min={15} max={80}/>
                  </div>
                </div>
                {
                    errors.height_min && (<p className="form-error">{errors.height_min}</p>)
                       }
                     {
                   errors.height_max && (<p className="form-error">{errors.height_max}</p>)
                     }

                <div className="container-input c-input-weight">
                    <label>Weight</label>
                   <div className="container-weight">
                   <input type="number" placeholder="kilograms min" value={input.weight_min} name="weight_min" onChange={e=> handleChange(e)} required className="input input-wight-min" min={5} max={82}/>
                    <input type="number" placeholder="kilograms max" value={input.weight_max} name="weight_max" onChange={e=> handleChange(e)} required  className="input input-wight-max" min={5} max={82}/>
                   </div>
                </div>
                {
            errors.weight_min && (<p className="form-error">{errors.weight_min}</p>)
            }
            {
            errors.weight_max && (<p className="form-error">{errors.weight_max}</p>)
            }


                 <div className="container-input c-input-life">
                    <label>life Span</label>
                   <div className="container-life">
                   <input type="number" placeholder="years min" value={input.life_span_min} name="life_span_min" onChange={e=> handleChange(e)}  className="input input-life-min" min={10} max={20}/>
                    <input type="number" placeholder="years max" value={input.life_span_max} name="life_span_max" onChange={e=> handleChange(e)}  className="input input-life-max" min={10} max={20}/>
                   </div>
                </div>

                {
            errors.life_span_min && (<p className="form-error">{errors.life_span_min}</p>)
            }
            {
            errors.life_span_max && (<p className="form-error">{errors.life_span_max}</p>)
            }


                <div className="container-input">
                    <label className="label-img">Image Direction</label>
                    <input type="text" placeholder="URL" value={input.image} name="image" onChange={e=> handleChange(e)} className="input input-img"/>
                </div>
                <div>
                {
            errors.image && (<p className="form-error">{errors.image}</p>)
            }

           <select onChange={e=> handlerSelect(e)} className="container-select">
            <option disabled selected defaultValue>Temperament</option>
            {
              temperaments?.map(temp => (
                <option value={temp.name} key={temp.id}>{temp.name}</option>
              ))
            }
        </select> 
        <ul className="temp-ul">
            <li className="temp-title">selected temperaments</li>
            <br />
            {
          input.temperament?.map(e=><li className="temp-li"><a onClick={a=> deleteListTemps(a)} id={e} className="temp-link">{e}</a></li>            
          )
         }</ul>   
        </div>
        <button type="submit" className={!button ? "form-button ": "disable-button-form" } disabled={button}>Create Breed</button>
            </form>

            <Link to='/home'><button className={`form-back`}>Back Home</button></Link>
          </div>
       );

    }
