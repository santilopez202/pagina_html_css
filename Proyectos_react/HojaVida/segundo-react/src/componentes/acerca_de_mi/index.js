import React from "react";

function Acerca_de_mi(props){
    return(
        <div className="informacion sobre mi">
            <br/>
            <h4>{props.aboutme}</h4>
            <hr className="linea--hr1"></hr>
            <p>{props.text}</p>
        </div>
    );
}

const myinfoAboutMe={
    aboutme:'Perfil personal',
    text:'Estudiante de la universidad de Manizales, de la carrera de ingenieria de sistemas quinto semestre, con conocimientos en varios campos de la ingenieria'
}

function CurriculumAcerca_de_mi(props){
    return(
        <div>
            <Acerca_de_mi
            aboutme={props.aboutme}
            text={props.text}
            />
        </div>
    );
}

function OfMainAcerca_de_Mi(){
    return(
        <div>
            <CurriculumAcerca_de_mi
            aboutme={myinfoAboutMe.aboutme}
            text={myinfoAboutMe.text}
            />
        </div>
    );
}

export default OfMainAcerca_de_Mi