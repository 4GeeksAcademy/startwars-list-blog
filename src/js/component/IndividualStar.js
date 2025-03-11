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
        
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="bg-light d-flex align-items-center justify-content-center" style={{ width: "100%", height: "300px" }}>
            800 x 600
          </div>
        </div>
        <div className="col-md-8">
          <h2 className="fw-bold"> {individualStar.name} </h2>
          <p className="text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.
          </p>
        </div>
      </div>
      <div className="row mt-4 border-top border-danger pt-3 text-center">
        <div className="col-2">
          <strong className="text-danger">Name</strong><br /> {individualStar.name}
        </div>
        <div className="col-2">
          <strong className="text-danger">Birth Year</strong><br />{individualStar.birth_year}
        </div>
        <div className="col-2">
          <strong className="text-danger">Gender</strong><br />{individualStar.gender}
        </div>
        <div className="col-2">
          <strong className="text-danger">Height</strong><br />{individualStar.height}
        </div>
        <div className="col-2">
          <strong className="text-danger">Skin Color</strong><br />{individualStar.skin_color}
        </div>
        <div className="col-2">
          <strong className="text-danger">Eye Color</strong><br />{individualStar.eye_color}
        </div>
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
