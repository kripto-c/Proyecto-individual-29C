import React from "react";
import { Link } from "react-router-dom";
import noFounStyle from './PagnoFound.css'
import { useDispatch} from "react-redux";

export default function PageNoFound({reset}) {
      const dispatch = useDispatch()
    return(
            <div className="notFound">
            <h1 className="notFound-errror">404</h1>
            <p className="notFound-description">the resource requested could not be found on this server!</p>
            <Link to={'/home'} className="notFound-link">
                <button className="notFound-back-home" onClick={reset ? ()=> dispatch(reset(0)) : ()=> console.log("home")}>Back Home</button>
            </Link>
         </div>
    );
}