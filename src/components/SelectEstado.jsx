import { useState } from "react";
import Select from "react-select";
import { useEstados } from "../hooks/useEstados";

export const SelectEstado = ({ onChange }) => {
  const { estados } = useEstados();
  const [choiceEstado, setChoiceEstado] = useState("");

  const estadoOptions = estados.map((estado) => ({
    value: estado.id,
    label: estado.nome
  }));

  const selectedOptionEstado = estadoOptions.find(
    (e) => e.value === choiceEstado
  );

  const handleEstadoUpdate = (event) => {
    setChoiceEstado(event.value);
    const selectedUf = estados.find((e) => e.id === event.value)?.sigla;
    onChange(selectedUf);
  };

  return (
    <Select
      placeholder="Selecione um estado"
      options={estadoOptions}
      value={selectedOptionEstado}
      onChange={handleEstadoUpdate}
    />
  );
};
