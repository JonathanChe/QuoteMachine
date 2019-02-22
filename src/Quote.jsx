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
`;

const Quote = ({ quote, selected }) => (
  <QuoteContainer>
    <h3> { selected ? `Selected: ${selected}` : ''}</h3>
    <p> {quote ? quote : ''} </p>
  </QuoteContainer>
);

export default Quote;
