import React from "react";
import "./styles.css";

const CheckBox = () => {
  function mostrar() {
    document.getElementById("escondido").hidden = !document.getElementById("check").checked
  }
  return (
    <div>
      <div className="questao">
        <h3>Você estudou em escola pública?</h3>
        <input onClick={mostrar} type="checkbox" id="check" value="checar" />
      </div>
      <div className="escola">
        <input
          hidden
          type="text"
          name="escondido"
          id="escondido"
          placeholder="Escreva o nome da escola aqui"
        />
      </div>
    </div>
  );
};

export default CheckBox;
