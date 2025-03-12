import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
                                         
export const IndividualPlanet = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [individualplanet, setIndividualPlanet]=useState({})

      
    useEffect( ()=>{
        fetch("https://swapi.dev/api/planets/"+ params.urlId )
        .then(res=>res.json())
        .then(response=> setIndividualPlanet(response))
        .catch(err=>console.log(err))

    },[])
    console.log("soy indivi",individualplanet)

    return (   
        
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="bg-light d-flex align-items-center justify-content-center" style={{ width: "100%", height: "300px" }}>
            800 x 600
          </div>
        </div>
        <div className="col-md-8">
          <h2 className="fw-bold"> {individualplanet.name} </h2>
          <p className="text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.
          </p>
        </div> 
      </div>
      <div className="row mt-4 border-top border-danger pt-3 text-center">
        <div className="col-2">
          <strong className="text-danger">Name</strong><br /> {individualplanet.name}
        </div>
        <div className="col-2">
          <strong className="text-danger">Climate</strong><br />{individualplanet.climate}
        </div>
        <div className="col-2">
          <strong className="text-danger">Population</strong><br />{individualplanet.population}
        </div>
        <div className="col-2">
          <strong className="text-danger"> Orbital Period</strong><br />{individualplanet.orbital_period}
        </div>
        <div className="col-2">
          <strong className="text-danger">Rotation Period</strong><br />{individualplanet.rotation_period}
        </div>
        <div className="col-2">
          <strong className="text-danger">Diameter</strong><br />{individualplanet.diameter}
        </div>
      </div>
    </div>
        )
    };
    
    IndividualPlanet.propTypes = {
        match: PropTypes.object
      };