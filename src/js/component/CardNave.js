import React, { useContext } from "react";

 import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const CardNave = ({name,hair,eye,urlId}) => {
  const { store, actions } = useContext(Context);
  console.log("urlid",urlId)
    return(                      
    <div className="card" style={{width:"16rem",margin:"15px"}}>
  <img src={rigoImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {name} </h5>
    <span className="card-text"> Gender : {hair} </span>
    <br/>
    <span className="card-text"> Hair-color : {hair} </span>
    <br/>
                                          
    <span className="card-text"> Eye-color : {eye} </span>
    <div className="d-flex justify-content-between align-items-center">
  <Link to={`/star/` + urlId} className="btn btn-primary mt-3">Learn More!</Link>
  <button onClick={()=>actions.agregar(name)} className="border border-warning  p-2 mt-3">
  <i className={`${store.favoriteName.includes(name) ? "fa-solid" : "fa-regular"} fa-heart text-warning`} />
  </button>
</div>
  </div>
</div>
)};  