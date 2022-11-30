import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.form`
  top: 0;
  left: 0;
  width: var(--navbar-width);
  position: fixed;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--jacarte-color);
  gap: 0.5rem;
  padding: 2rem 0;
`;

export const Logo = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const Button = styled(NavLink)`
  color: var(--maximum-blue-green);

  &:hover,
  &.active {
    color: var(--smashed-pumpkin);
  }
`;
