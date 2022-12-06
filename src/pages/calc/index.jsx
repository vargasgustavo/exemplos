import React from "react";

export default function Calc() {
  let botao = document.getElementsByClassName("mybutton")[0];
  botao.onclick = function (e) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let oper = document.getElementById("oper").value;
    if (oper === "+") {
      alert(num1 + num2);
    } else if (oper === "-") {
      alert(num1 - num2);
    } else if (oper === "/") {
      alert(num1 / num2);
    } else if (oper === "*") {
      alert(num1 * num2);
    } else {
      alert("operação inválida");
    }
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>Calculadora simples - React</h1>
        <form action="#">
            <input type="text" placeholder="Digite o primeiro numero" id="num1" />
            <input type="text" placeholder="Digite o segundo numero" id="num2" />
            <input type="text" placeholder= "Digite a operação + - / * " id="oper" />
            <button className="mybutton"> Calcular </button>
        </form>
    </div>
  );
}
