import React from "react";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNameBreeds } from "../../redux/actions";
import serBarstyle from "./searchBar.css"

export default function SearchBar(){
    const dispatch = useDispatch();
    const errors = useSelector(state=> state.errors)
    const [name, setName] = useState("");

function handlerInputChange (e) {
     e.preventDefault()
     setName(e.target.value)
}

function handlerSubmit(e) {
     e.preventDefault();
     dispatch(getNameBreeds(name))
     setName("");
}

    return(
         <div className="serchBar">
            <input type="text" placeholder={errors.length == 0 ? "Search..." : "No Found"} onChange={e=> handlerInputChange(e)} value={name} className={`serchBar-input ${errors.length == 0 ? "" : "input-nofound" }`}/>
            <button type="submit" onClick={e=> {handlerSubmit(e)}} className={`serchBar-button ${name.length == 0 ? "disable-button": ""}`} disabled={name.length > 0 ? false : true}>Search</button>
         </div>
    );

}