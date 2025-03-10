import React, { useContext } from "react";
 import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardNave } from "../component/CardNave";
import { Context } from "../store/appContext";


export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.nave)
  // let urlId=store.nave.url("https://swapi.dev/api/people/","").replace("/","")
  // console.log(urlId)
 

  return (
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
  
)};
