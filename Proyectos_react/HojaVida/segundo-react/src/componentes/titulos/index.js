import React from "react";

function Titulos(props){
    return(
      <div className='information--degrees'>
        <h4>{props.titulos}</h4>
        <hr className='linea--hr1'/>
        <ul>
          <li><p>{props.degree1}</p></li>
          <li><p>{props.school1}</p></li>  
          <li><p>{props.date}</p></li>   
        </ul>
      </div>
    );
  }

const myTitulos ={
    titles:'Diplomatura',
    degree1: 'Bachiller academico',
    school1: 'Instituto Universitario de Caldas',
    date: '28-11-2019'
}

function CurriculumTitulos(props) {
    return(
        <div>
            <Titulos
            titles={props.titles}
            degree1={props.degree1}
            school1={props.school1}
            date={props.date}
            />
        </div>
    );
}

function OfMainTitulos(){
    return(
        <div>
            <CurriculumTitulos
            titulos={myTitulos.titulos}
            degree1={myTitulos.degree1}
            school1={myTitulos.school1}
            date={myTitulos.date}
            />
        </div>
    );
}

export default OfMainTitulos;