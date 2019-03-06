import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import img from './assets/background.jpg';

const ImgBackground = styled.div`
  background: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 60%;

  @media screen and (min-width: 280px) and (max-width: 756px) {
    width: 100%;
    height: 50vh;
  }
`;

const QuoteContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  font-size: 5rem;

  @media only screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 520px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 320px) {
    font-size: 2rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 50%;
`;

const Photo = ({ handleClick }) => (
  <ImgBackground>
    <QuoteContainer>
      <span>Quote Machine</span>
      <ButtonContainer>
        <Button
          name="Ron Swanson"
          handleClick={handleClick}
        />
        <Button
          name="Breaking Bad"
          handleClick={handleClick}
        />
      </ButtonContainer>
    </QuoteContainer>
  </ImgBackground>
);

export default Photo;
