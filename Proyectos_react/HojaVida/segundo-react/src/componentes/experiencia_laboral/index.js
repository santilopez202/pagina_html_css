import React from "react";

function ExperienciaLaboral(props){
    return(
        <div className="informacion experiencia laboral">
            <h4>{props.workExperiencie}</h4>
            <hr className="linea--hr1"></hr>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </div>
    );
}

const myInfoWorkExperiencie={
        workExperiencie:'Experiencia Laboral',
        text1:'Trabaje 2 meses como bodeguero en el area de bodega de velez',
        text2:'Actualmente llevo 3 meses trabajando en una empresa de entras de mercancia'
}

function CurriculumExperiencia(props){
    return(
        <div>
            <ExperienciaLaboral
            workExperiencie={props.workExperiencie}
            text1={props.text1}
            text2={props.text2}
            />
        </div>
    );
}

function OfMainExperienciaLaboral(){
    return(
        <div>
            <CurriculumExperiencia
            workExperiencie={myInfoWorkExperiencie.workExperiencie}
            text1={myInfoWorkExperiencie.text1}
            text2={myInfoWorkExperiencie.text2}
            />
        </div>
    );
}

export default OfMainExperienciaLaboral;