import React, { useEffect, useState } from "react";
 
function Calculadora() {
    const [num1,setNum1] = useState()
    const [num2,setNum2] = useState()
    const [operador,setOperador] = useState()
    const [total,setTotal] = useState()
 
 
    useEffect(() => {
        if (operador === "+") {
            setTotal(Number(num1) + Number(num2));
        }
        else if (operador === "-") {
            setTotal(num1 - num2);
        }
        else if (operador === "/") {
            setTotal(num1 / num2);
        }
        else if (operador === "*") {
            setTotal(num1 * num2);
        }
        }, [num1,num2,operador])
 
    return (
        <div style={{"marginleft":"10px"}}>
            <h1>Calculadora simples</h1>
                <input type="text" placeholder="Digite o primeiro numero" onChange={(event)=> setNum1(event.target.value)}/><br /><br />
                <input type="text" placeholder="Digite o segundo numero"  onChange={(event)=> setNum2(event.target.value)} /><br /><br />
                <div onChange={event => setOperador(event.target.value)}>
                    <input type="radio" value='+' name="r"/>Somar
                    <input type="radio" value='-' name="r"/>Subtrair
                    <input type="radio" value='*' name="r"/>Multiplicar
                    <input type="radio" value='/' name="r"/>Dividir
                </div>
                <h3>{total}</h3><br /><br />
        </div>
    );
 
}
 
export default Calculadora;