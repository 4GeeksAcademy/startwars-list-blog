import React, { useContext } from "react";
 import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardNave } from "../component/CardNave";
import { Context } from "../store/appContext";
import { Planets } from "../component/Planets";


export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log("nave",store.nave)
  console.log("planets",store.planets)
  // let urlId=store.nave.url("https://swapi.dev/api/people/","").replace("/","")
  // console.log(urlId)
 

  return (
    <>
    <h3 className="text-danger" > Characters </h3>
    <div className="row flex-nowrap" style={{overflowX:"auto"}}>
      {
        store.nave.map(nav=> 
<CardNave key={nav.url}  
urlId={nav.url.replace("https://swapi.dev/api/people/","").replace("/","")} 
name={nav.name}
gender={nav.gender}
hair={nav.hair_color}
eye={nav.eye_color}


/>)
      }
   

    </div>



    <h3  className="text-danger"> Planets</h3>
    <div className="row flex-nowrap" style={{overflowX:"auto"}}>
      {
        store.planets.map(planet=> 
<Planets key={planet.url}  
urlId={planet.url.replace("https://swapi.dev/api/planets/","").replace("/","")} 
name={planet.name}
population={planet.population}
terrain={planet.terrain}



/>)
      }
   

    </div>
    </>
  
)};
