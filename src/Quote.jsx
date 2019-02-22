import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
  min-height: 100vh;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 3rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 1rem;
  }
`;

const Quote = ({ quote, selected, loading }) => (
  <QuoteContainer>
    {loading ?
      (
      <p>Fetching...</p>
      )
      : (
        <div>
          <h3> { selected ? `Selected: ${selected}` : ''}</h3>
          <p> {quote ? quote : ''} </p>
        </div>
      )
    }
  </QuoteContainer>
);

export default Quote;
