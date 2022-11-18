import React from "react";

import Logonetflix from "../../common/components/Logonetflix";
import LangSel from "../home/components/LangSel";
import InicButton from "../../common/components/InicButton";
import InicEmail from "../home/components/InicEmail";
import "../../css/home.css";
import fondo from "../../common/img/fondo.jpg";

const Home = () => {
  return (
    <div id="container">
      <img id="fondo" src={fondo} alt="" />
      <div id="inicial">
        <div id="arriba">
          <Logonetflix />
          <div id="Sel-Butt">
            <LangSel />
            <InicButton texto="Iniciar sesión" nav="/login" />
          </div>
        </div>
        <InicEmail />
      </div>
    </div>
  );
};

export default Home;
