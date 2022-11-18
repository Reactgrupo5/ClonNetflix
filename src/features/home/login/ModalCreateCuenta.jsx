import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import "../../../css/ModalCreateCuenta.css";
import { dblClick } from "@testing-library/user-event/dist/click";

const ModalCreateCuenta = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  //   document.addEventListener("dblClick", (e) => {
  //     document.getElementById("modal").style.display = "none";
  //   });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    // localStorage.clear();
    localStorage.setItem(form.username, form.password);
    navigate("/movie");
  };

  const handleHelp = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setForm({
      ...form,
      ["username"]: sessionStorage.getItem("email"),
    });
    handleShow();
  }, []);

  return (
    <div>
      <Modal show={show} onHide={handleClose} id="modal">
        <div id="modalConteiner1">
          <div id="header">Crear Cuenta</div>
          <div className="modal-input">
            <span className="modalspan">Email o número de teléfono</span>
            <input
              type="text"
              className="modalinput"
              name="username"
              onChange={handleChange}
              value={form.username}
            />
          </div>
          <div className="modal-input">
            <span className="modalspan">Contraseña</span>
            <input
              type="password"
              className="modalinput"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="modalhelp">
            <button onClick={handleHelp} id="modalhelp">
              Necesitas ayuda?
            </button>
          </div>
          <div>
            <button
              className="modalbutton"
              name="password"
              onClick={handleSubmit}
            >
              Crear Cuenta
            </button>
          </div>
        </div>
        <div id="modalConteiner2">
          ¿Primera vez en Netflix? Suscríbete ahora. Esta página está protegida
          por Google reCAPTCHA para comprobar que no eres un robot. Más info.
        </div>
      </Modal>
    </div>
  );
};

export default ModalCreateCuenta;
