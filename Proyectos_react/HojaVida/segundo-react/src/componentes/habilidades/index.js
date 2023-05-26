import React from "react";

function Habilidades(props){
  return(
    <div className="informacion de habilidades">
      <h4>{props.Habilidades}</h4>
      <hr className="linea--hr1"></hr>
        <ul>
          <li><p>{props.trabajoEnGrupo}</p></li>
          <li><p>{props.Responsabilidad}</p></li>
          <li><p>{props.Colaboracion}</p></li>
        </ul>
    </div>
  );
}

const myInfoHabilidades={
  Habilidades:'Habilidades',
  trabajoEnGrupo:'Trabajo en grupo',
  Responsabilidad:'Responsabilidad',
  Colaboracion:'Colaboración'
}

function CurriculumHabilidades(props){
    return(
      <div>
        <Habilidades
        Habilidades={props.Habilidades}
        trabajoEnGrupo={props.trabajoEnGrupo}
        Responsabilidad={props.Responsabilidad}
        Colaboracion={props.Colaboracion}
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
      Colaboracion={myInfoHabilidades.Colaboracion}
      />
    </div>
  );
}

export default OfMainHabilidades;