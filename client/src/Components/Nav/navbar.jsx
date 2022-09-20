import React from "react";
import SearchBar from "../SearchBar/searchBar";
import { Link } from "react-router-dom";
import nav from "./navbar.css"


export default function Navbar(){
    return(
        <div className="Navbar">
            <SearchBar />
             <div className="container-link">
             <Link to="/create_breed_dog"><h3 className="link-nav">Create Breed</h3></Link>
             <Link to="/about"><h3 className="link-nav">About developer</h3></Link>
             </div>
        </div>
    );
}