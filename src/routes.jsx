import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResponsiveAppBar from "./navbar";
import Calc from "./pages/calc";
import CheckBox from "./pages/checkbox";
import SelectDate from "./pages/selecao-data";
import { SelectCidade, SelectEstado } from "./pages/selects";

export default function Routes() {

  const [selectedUf, setSelectedUf] = React.useState("");

  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <>
          <ResponsiveAppBar />
        </>
      ),
    },
    {
      path: "/selects",
      element: (
        <>
          <ResponsiveAppBar />
          <SelectEstado onChange={setSelectedUf}/>
          <SelectCidade uf={selectedUf}/>
        </>
      ),
    },
    {
      path: "/calc",
      element: (
        <>
          <ResponsiveAppBar />
          <Calc />
        </>
      ),
    },
    {
      path: "/checkbox",
      element: (
        <>
          <ResponsiveAppBar />
          <CheckBox />
        </>
      )
    },
    {
      path: "select-date",
      element: (
        <>
          <ResponsiveAppBar />
          <SelectDate />
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}
