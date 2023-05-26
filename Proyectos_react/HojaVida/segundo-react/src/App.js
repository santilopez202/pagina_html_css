
import './App.css';
import miCara from './componentes/imagenes/WhatsApp Image 2023-05-22 at 22.24.10.jpeg';
import OfMain from "./componentes/cuerpo";
import OfMainAcerca_de_Mi from "./componentes/acerca_de_mi";
import logo from './componentes/imagenes/tecnologia.png';
import OfMainTitulos from './componentes/titulos';
import OfMainExperienciaLaboral from './componentes/experiencia_laboral';
import OfMainHabilidades from './componentes/habilidades';
import OfMainLenguajes from './componentes/lenguajes';
import OfMainFormulario from './componentes/formulario';


function App() {
  return (
    <div className='fondo--main'>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <br />
            <img className="imagen--picture" src={miCara} alt=" " />
            <OfMain className="main--letra" />
            <br />
            <br />
            <br />
            <img className="logos--aplicaciones" src={logo} alt=" " />
          </div>
          <div className="col-2"/>
          <div className="col-5">
            <div className="row">
              <OfMainAcerca_de_Mi/>
              <br/>
              <OfMainTitulos/>
              <br/>
              <OfMainExperienciaLaboral/>
              <br/>
              <OfMainHabilidades/>
              <br/>
              <OfMainLenguajes/>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <OfMainFormulario/>
    </div>
  );
}
export default App;
