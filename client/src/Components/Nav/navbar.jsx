import React from "react";
import SearchBar from "../SearchBar/searchBar";
import { Link } from "react-router-dom";
import nav from "./navbar.css"


export default function Navbar({setpage}){
    return(
        <div className="Navbar">
            <SearchBar setpage={setpage}/>
             <div className="container-link">
             <Link to="/create_breed_dog"><h3 className="link-nav">Create Breed</h3></Link>
             <Link to="/home/breedsDelete">
                <h3 className="link-nav">Delete Breed</h3>
             </Link>
             <Link to="/home/about"><h3 className="link-nav">About </h3></Link>
             </div>
        </div>
    );
}