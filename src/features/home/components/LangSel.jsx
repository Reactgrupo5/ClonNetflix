import React from "react";

import { mundito } from "../../../common/img/Img";

const LangSel = () => {
  const handleSelectChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div id="LangSel">
      <img src={mundito} id="mundito" alt=""/>
      <select onChange={handleSelectChange}>
        <option value="spanish" defaultValue>
          Español
        </option>
        <option value="english">English</option>
      </select>
    </div>
  );
};

export default LangSel;
