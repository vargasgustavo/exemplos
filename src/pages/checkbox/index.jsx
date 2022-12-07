import React from "react";
import "./styles.css";

const CheckBox = () => {

    function Show() {
        var obj = document.getElementById("check").checked;
        if (obj = true) {
            return document.getElementById("escondido").hidden = false;
        } else {
            return document.getElementById("escondido").hidden = true;
        }
    }
    console.log(Show)

  return (
    <div>
      <div className="questao">
        <h3>Você estudou em escola pública?</h3>
        <input onClick={Show} type="checkbox" id="check" value="checar"/>
      </div>
      <div className="escola">
        <input
          hidden
          type="text"
          id="escondido"
          placeholder="Escreva o nome da escola aqui"
        />
      </div>
    </div>
  );
};

export default CheckBox;
