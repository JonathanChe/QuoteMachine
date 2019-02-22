import React from 'react';
import styled from 'styled-components';

const CoolButton = styled.button`
  border: 1px solid white;
  border-radius: 10px;
  height: 75px;
  width: 125px;
  color: white;
  font-weight: bold;
  background: rgba(0,0,0,0.01);
  letter-spacing: 0.05rem;
  margin-right: 2.5%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: rgba(0,0,0,0.25);
  }

  @media only screen and (max-width: 320px) {
    width: 75px;
    height: 50px;
  }
`;

const Button = ({ name, handleClick }) => (
  <CoolButton
    name={name}
    onClick={handleClick}
  >
  {name}
  </CoolButton>
);

export default Button;
