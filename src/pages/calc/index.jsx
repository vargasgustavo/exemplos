import React, { useState } from 'react';
import Button from '@mui/material/Button'
import * as math from 'mathjs';

const arrOperacoes = ["*", "/", "+", ".", "-"];

export default function Calc() {

    const [Input, setInput] = useState();
    function insereNum(val) {
        setInput(Input + val);
    }
    function insereOperacao(val) {
        if (
            Input === "" || 
            (arrOperacoes.includes(Input[Input.length - 1]) && 
            arrOperacoes.includes(val))
        ) {
            return;
        } else {
            setInput(Input + val);
        }
    };

    function calcular() {
        if (Input === "" || arrOperacoes.includes(Input[Input.length - 1])) {
            return Input;
        } else {
            setInput(math.evaluate(Input));
        }
    }

    return (
        <div className="App">
            <h1>Calculadora simples - React</h1>
            <div className="calc-wrapper">
                <Input onChange={insereNum}/>
                <Input onChange={insereOperacao}/>
                <Input onChange={insereNum}/>
                <Button onClick={calcular}>Calcular</Button>
            </div>
        </div>
    )
}