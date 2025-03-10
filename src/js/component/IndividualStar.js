import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
                                         
export const IndividualStar = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [individualStar, setIndividualStar]=useState({})

   
    useEffect( ()=>{
        fetch("https://swapi.dev/api/people/"+ params.urlId )
        .then(res=>res.json())
        .then(response=> setIndividualStar(response))
        .catch(err=>console.log(err))

    },[])
    console.log("soy indivi",individualStar)

    return (   
        
         <div className="card" style={{width:"16rem",margin:"15px"}}>
          <img src={rigoImage} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> {individualStar.name} </h5>
            <span className="card-text"> Gender : {individualStar.gender} </span>
            <br/>
            <span className="card-text"> Hair-color : {individualStar.hair_color} </span>
            <br/>
                                                  
            <span className="card-text"> Eye-color : {individualStar.eye_color} </span>
          
          </div>
        </div>
        )
    };
    
    IndividualStar.propTypes = {
        match: PropTypes.object
    //     <div className="jumbotron">
    //         <h1 className="display-4">This will show the demo element: {params.id}</h1>
     
    //         <hr className="my-4" />
    
    //         <Link to="/">
    //             <span className="btn btn-primary btn-lg" href="#" role="button">
    //                 Back home
    //             </span>
    //         </Link>
    //     </div>
    // );   
};
