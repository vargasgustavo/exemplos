import Select from "react-select";
import { useCidades } from "../../hooks/useCidades";
import { useEstados } from "../../hooks/useEstados";
import { useState } from "react";

import { Body } from "./styles";

export const SelectCidade = ({ uf }) => {
  const { cidades, loading: loadingCidades } = useCidades({
    uf,
  });

  const cidadeOptions = cidades.map((cidade) => ({
    value: cidade.codigo_ibge,
    label: cidade.nome,
  }));

  return (
    <Body>
      <Select
        isLoading={loadingCidades}
        loadingMessage={() => "Estamos carregando as cidades, aguarde ..."}
        isDisabled={loadingCidades || cidadeOptions.length === 0}
        options={cidadeOptions}
        placeholder="Selecione uma cidade"
      />
    </Body>
  );
};

export const SelectEstado = ({ onChange }) => {
  const { estados } = useEstados();
  const [choiceEstado, setChoiceEstado] = useState("");

  const estadoOptions = estados.map((estado) => ({
    value: estado.id,
    label: estado.nome,
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
    <Body>
      <Select
        placeholder="Selecione um estado"
        options={estadoOptions}
        value={selectedOptionEstado}
        onChange={handleEstadoUpdate}
      />
    </Body>
  );
};
