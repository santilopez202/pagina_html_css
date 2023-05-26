import React from "react";



function Formulario(props) {
  return (
    <div className="ultimo--contenedor">
        <div className="row">
            <div className="col-12">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                    <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="name" className="form-control" />
                        <label htmlFor="name" className="">
                        <h4 className="titulo--global">{props.YourName}</h4>
                        </label>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="email" name="email" className="form-control" />
                        <label htmlFor="email" className="">
                        <h4 className="titulo--global">{props.YourEmail}</h4>
                        </label>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control" />
                        <label htmlFor="subject" className="">
                        <h4 className="titulo--global">{props.subject}</h4>
                        </label>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        <label htmlFor="message">
                        <h4 className="titulo--global">{props.message}</h4>
                        </label>
                    </div>
                    </div>
                </div>
                </form>
                <div>
                <a className="btn btn--primary" onClick={() => document.getElementById("contact-form").submit()}>
                    <h4 className="titulo--global">{props.send}</h4>
                </a>
                </div>
                <div className="status"></div>
            </div>
        </div>
    </div>
  );
}

const formularioInfo ={
    YourName:'Nombre',
    YourEmail:'Correo',
    message:'Escribe un mensaje',
    subject:'Objetivo',
    send:'enviar'
}

function CurriculumFormulario(props) {
    return(
        <div>
            <Formulario
            YourName={props.YourName}
            YourEmail={props.YourEmail}
            message={props.message}
            subject={props.subject}
            send={props.send} 
            />
        </div>
    );
}

function OfMainFormulario(){
    return(
        <div>
            <CurriculumFormulario
            YourName={formularioInfo.YourName}
            YourEmail={formularioInfo.YourEmail}
            message={formularioInfo.message}
            send={formularioInfo.send}
            subject={formularioInfo.subject}
            />
        </div>
    );
}

export default OfMainFormulario;