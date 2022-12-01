import React, { useState } from 'react';
import '../../calculator.css'

export default function Calc() {

    const arrOperacoes = ["*", "/", "+", ".", "-"];

    return (
        <div className="App">
            <h1>Calculadora simples - React</h1>
            <div className="calc-wrapper"></div>
            
        </div>
    )
}