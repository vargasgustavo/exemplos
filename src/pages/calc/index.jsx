import React from "react";

function Calcular() {
  let num1 = Number(document.getElementById("num1"));
  let num2 = Number(document.getElementById("num2"));
  let oper = document.getElementById("oper");
  if (oper === "+") {
    alert(num1 + num2);
  } else if (oper === "-") {
    alert(num1 - num2);
  } else if (oper === "/") {
    alert(num1 / num2);
  } else if (oper === "*") {
    alert(num1 * num2);
  } else {
  }
  console.log(num1 + num2);
  return (
    <div className="App">
      <h1>Calculadora simples - React</h1>
      <form action="#">
        <input type="text" placeholder="Digite o primeiro numero" id="num1" /><br/><br/>
        <input type="text" placeholder="Digite o segundo numero" id="num2" /><br/><br/>
        <select>
          <option id="soma">Soma</option>
          <option id="sub">Subtração</option>
          <option id="multi">Multiplicação</option>
          <option id="div">Divisão</option>
        </select>
        <br/><br/>
        <button id="btn" onClick={Calcular}>
          Calcular
        </button>
      </form>
    </div>
  );
}

export default Calcular;
