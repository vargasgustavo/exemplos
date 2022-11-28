import { useState } from "react";

import "./styles.css";

import { SelectEstado } from "./components/SelectEstado";
import { SelectCidade } from "./components/SelectCidade";

export default function App() {
  const [selectedUf, setSelectedUf] = useState("");

  return (
    <div className="App">
        <SelectEstado onChange={setSelectedUf} />
        <SelectCidade uf={selectedUf} />
    </div>
  );
}
