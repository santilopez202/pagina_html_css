
import './App.css';
import miCara from './components/imagenes/WhatsApp Image 2023-05-22 at 22.24.10.jpeg';
import OfMain from "./components/body";
import OfMainAboutMeDes from "./components/bodyAboutMeDes";
import logo from './components/imagenes/tecnologia.png';
import OfMainTitles from './components/bodyMyTitles';
import OfMainWorkExperience from './components/bodyExperiencesWorks';
import OfMainHabilities from './components/bodyHabilities';
import OfMainLenguages from './components/bodyLenguages';
import OfMainFormulario from './components/bodyFormulario';


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
              <fMainExperienciaLaboral/>
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
