import { Container, Button } from "./styles";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Axios from "../axios.json";

import Tooltip from "@mui/material/Tooltip";

import HomeIcon from "@mui/icons-material/Home";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
import CalculateIcon from "@mui/icons-material/Calculate";

export default function NavBar() {
  const [User, setUser] = useState("DEFAULT");
  const Navigate = useNavigate();

  function IconRender(tipo) {
    switch (tipo) {
      case "HOME":
        return <HomeIcon />;

      case "SELECTS":
        return <HighlightAltIcon />;

      case "CALC":
        return <CalculateIcon />;

      default:
        return <p>?</p>;
    }
  }

  return (
    <Container>
      {Axios?.STATIC_NAVBAR_BUTTONS[User]?.map((b, i) => (
        <Tooltip title={b?.NAME} placement="right" key={i}>
          <Button to={b?.URL} onClick={b?.NAME}>
            {IconRender(b?.NAME)}
          </Button>
        </Tooltip>
      ))}
    </Container>
  );
}
