import React from "react";

function PersonalInfo(props){
    return(
        <div className="informacion personal">
            <br/>
            <h3>{props.name}</h3>
            <br/>
            <p className="negrita--parrafo">{props.email}</p>
            <p className="negrita--parrafo">{props.phone}</p>
            <p className="negrita--parrafo">{props.address}</p>
            <p>{props.ownDescription}</p>
        </div>
    )
}
const myInfo={
    name:'Santiago López Alba',
    email:'santigolopezalba200228@gmail.com',
    phone:'3226388499',
    ownDescription:'Una persona autodidacta que aplica todo el conocimiento aprendido dia a dia'
};


function CurriculumInfoMain(props){
    return(
      <div>
        <PersonalInfo
        name={props.name}
        email={props.email}
        phone={props.phone}
        address={props.address}
        ownDescription={props.ownDescription}
        />
      </div>  
    );
}

function OfMain(){
    return(
        <div>
            <CurriculumInfoMain
            name={myInfo.name}
            email={myInfo.email}
            phone={myInfo.phone}
            address={myInfo.address}
            ownDescription={myInfo.ownDescription}
            />
        </div>
    );
}

export default OfMain;