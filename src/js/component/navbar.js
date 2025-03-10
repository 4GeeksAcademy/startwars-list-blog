import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

       
export const Navbar = () => {
	 const { store, actions } = useContext(Context);
	  
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-3">
  <Link to="/">
    <span className="navbar-brand mb-0 h1">StarWars</span>
  </Link>
  <div className="ml-auto position-relative">
    <button className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
      Favorito {store.favoriteName.length}
    </button> 
    <ul className="dropdown-menu dropdown-menu-end">
      {store.favoriteName.length === 0 ? (
        <li className="dropdown-item text-muted">No hay favoritos</li>
      ) : (
        store.favoriteName.map((item, index) => <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
          {item}
          <button onClick={()=>actions.deleteFavorite(index)} className="btn btn-danger btn-sm" >
              <i className="fa fa-trash"></i>
            </button>
          </li>)
      )}
    </ul>
  </div>
</nav>

	);
};
