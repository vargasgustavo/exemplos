import { useState } from "react";

import "./calculator.css";

import { SelectEstado, SelectCidade } from "./pages/selects/index";

export default function App() {
  const [selectedUf, setSelectedUf] = useState("");

  return (
    <div className="App">
        <SelectEstado onChange={setSelectedUf} />
        <SelectCidade uf={selectedUf} />
    </div>
  );
}
