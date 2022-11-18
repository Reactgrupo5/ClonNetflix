import React from "react";
import { useNavigate } from "react-router-dom";

const InicButton = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(props.nav);
  };

  return (
    <div>
      <button id="InicButton" className="InicButton" onClick={handleClick}>
        {props.texto}
      </button>
    </div>
  );
};

export default InicButton;
