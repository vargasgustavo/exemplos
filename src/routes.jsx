import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import NavBar from "./navbar";
import Calc from "./pages/calc";
import { SelectCidade, SelectEstado } from "./pages/selects";

export default function Routes() {

  function Father() {
    
  }

  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <Father>
          <NavBar />
          <App />
        </Father>
      ),
    },
    {
      path: "/selects",
      element: (
        <Father>
          <NavBar />
          <SelectCidade />
          <SelectEstado />
        </Father>
      ),
    },
    {
      path: "/calc",
      element: (
        <Father>
          <NavBar />
          <Calc />
        </Father>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
