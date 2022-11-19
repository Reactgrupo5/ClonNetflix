import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/home.css";

const InicButton = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(props.nav);
  };

  return (
    <div>
      <button className="InicButton" onClick={handleClick}>
        {props.texto}
      </button>
    </div>
  );
};

export default InicButton;
