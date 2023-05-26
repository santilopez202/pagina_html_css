import React from "react";

function Lenguajes(props){
    return(
      <div className='information--languages'>
        <h4>{props.Lenguajes}</h4>
        <hr className='linea--hr1'/>
        <p>{props.Spanish}</p>
        <p>{props.English}</p>

      </div>
    );
  }

const myInfolenguajes={
    lenguajes:'Idiomas',
    Español:'Ingles : Basico',
    Ingles:'Español : Avanzado'
  }

function CurriculumLenguajes(props){
    return(
      <div>
        <Lenguajes
          lenguajes={props.lenguajes}
          Español={props.Español}
          Ingles={props.Ingles}
        />
      </div>
    );
  }
  
function OfMainLenguajes(){
    return(
        <div>
            <CurriculumLenguajes
            lenguajes={myInfolenguajes.lenguajes}
            Español={myInfolenguajes.Español}
            Ingles={myInfolenguajes.Ingles}
            />
        </div>
    );
}

export default OfMainLenguajes;