import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InicEmail = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
  });

  const texto = "Comenzar  >";

  const handleClick = (e) => {
    sessionStorage.clear();
    sessionStorage.setItem("email", form.email);
    navigate("/create");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div id="textoDEabajo">
      <div id="textoDEabajoGrande" className="textoDeabajo">
        <div>Peliculas y series ilimitadas</div>
        <div>y mucho más</div>
      </div>
      <div id="textoDEabajoMediano" className="textoDeabajo">
        Disfruta cuando quieras. Cancela Cuando quieras
      </div>
      <div id="textoDEabajoChico" className="textoDeabajo">
        ¿quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Netflix
      </div>
      <div id="textoEmailButton">
        <input
          type="email"
          id="textoEmail"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <button id="textoButton" className="InicButton" onClick={handleClick}>
          {texto}
        </button>
      </div>
    </div>
  );
};

export default InicEmail;
