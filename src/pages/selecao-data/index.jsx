import React, { useState, useEffect } from "react";

const SelectDate = () => {
  const [Data, setData] = useState("");
  const [Dia, setDia] = useState(0);
  const [Mes, setMes] = useState(0);
  const [Ano, setAno] = useState(0);

  useEffect(() => {
    let data = new Date(Data)
    console.log(data);
    setDia(data.getDate()+1);
    setMes(data.toLocaleString("default", {month: "long"}));
    setAno(data.getFullYear());
  }, [Data]);

  return (
    <div>
      <h1>Selecione uma data:</h1>
      <br />
      <input
        type="date"
        value={Data}
        onChange={(e) => setData(e.target.value)}
      />
      <br /><br />
      <p><strong>{!!Dia && !!Mes && !!Ano && `${Dia} de ${Mes}, ${Ano}`}</strong></p>
    </div>
  );
};

export default SelectDate;
