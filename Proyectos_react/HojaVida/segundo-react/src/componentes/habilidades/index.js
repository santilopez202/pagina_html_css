import React from "react";

function Habilidades(props){
  return(
    <div className="informacion de habilidades">
      <h4>{props.Habilidades}</h4>
      <hr className="linea--hr1"></hr>
        <ul>
          <li><p>{props.trabajoEnGrupo}</p></li>
          <li><p>{props.Responsabilidad}</p></li>
          <li><p>{props.Compañerismo}</p></li>
        </ul>
    </div>
  );
}

const myInfoHabilidades={
  Habilidades:'Habilidades',
  trabajoEnGrupo:'Trabajo en grupo',
  Responsabilidad:'Responsabilidad',
  Compañerismo:'Compañerismo'
}

function CurriculumHabilidades(props){
    return(
      <div>
        <Habilidades
        Habilidades={props.Habilidades}
        trabajoEnGrupo={props.trabajoEnGrupo}
        Responsabilidad={props.Responsabilidad}
        Compañerismo={props.Compañerismo}
        />
      </div>
    );
}

function OfMainHabilidades(){
  return(
    <div>
      <CurriculumHabilidades
      Habilidades={myInfoHabilidades.Habilidades}
      Responsabilidad={myInfoHabilidades.Responsabilidad}
      trabajoEnGrupo={myInfoHabilidades.trabajoEnGrupo}
      Compañerismo={myInfoHabilidades.Compañerismo}
      />
    </div>
  );
}

export default OfMainHabilidades;