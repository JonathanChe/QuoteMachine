import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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

const QuoteContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;

  img {
    -webkit-filter: drop-shadow(-4px 5px 5px rgba(0,0,0,0.6));
    filter: drop-shadow(-4px 5px 5px rgba(0,0,0,0.6));
    height: 200px;
    animation: image-slide 4s cubic-bezier(.5,.5,0,1);
    animation-fill-mode: forwards;
  }

  /* Slides the image from left (-250px) to right (150px) */
  @keyframes image-slide {
    0% { transform: translateX(-250px) scale(0); }
    60% { transform: translateX(-250px) scale(1); }
    90% { transform: translateX(150px) scale(1); }
    100% { transform: translateX(150px) scale(1); }
  }

  @media screen and (min-width: 1000px) {
    @keyframes image-slide {
      0% {
        transform: translatex(-250px) scale(0);
      }
      60% {
        transform: translatex(-250px) scale(1);
      }
      90% {
        transform: translatex(150px) scale(1);
      }
      100% {
        transform: translatex(150px) scale(1);
      }
    }
  }

  @media screen and (max-width: 1000px) {
    @keyframes image-slide {
      0% {
        transform: translatex(-150px) scale(0);
      }
      60% {
        transform: translatex(-150px) scale(1);
      }
      90% {
        transform: translatex(120px) scale(1);
      }
      100% {
        transform: translatex(120px) scale(1);
      }
    }
  }

  @media screen and (max-width: 450px) {
    @keyframes image-slide {
      0% {
        transform: translatex(-80px) scale(0);
      }
      60% {
        transform: translatex(-80px) scale(1);
      }
      90% {
        transform: translatex(80px) scale(1);
      }
      100% {
        transform: translatex(80px) scale(1);
      }
    }
  }
`;

const CoolQuote = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;
  margin-left: -100px;

  p {
    font-size: 24px;
    font-family: sans-serif;
  }

  .fading-effect {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background: white;
    -webkit-animation: text-slide 4s cubic-bezier(0.5, 0.5, 0, 1);
    animation: text-slide 4s cubic-bezier(0.5, 0.5, 0, 1);
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }

  @keyframes text-slide {
    0% { width: 100%; }
    60% { width: 100%; }
    75%{ width: 0; }
    100% { width: 0; }
  }

  @media screen and (min-width: 1000px) {
    @keyframes text-slide {
      0% {
        width: 100%;
      }
      60% {
        width: 100%;
      }
      77% {
        width: 0;
      }
      100% {
        width: 0;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    @keyframes text-slide {
      0% {
        width: 100%;
      }
      60% {
        width: 100%;
      }
      77% {
        width: 0;
      }
      100% {
        width: 0;
      }
    }
  }

  @media screen and (max-width: 450px) {
    @keyframes text-slide {
      0% {
        width: 100%;
      }
      60% {
        width: 100%;
      }
      77% {
        width: 0;
      }
      100% {
        width: 0;
      }
    }
  }
`;

const Quote = ({ quote, selected, loading }) => (
  <Container>
    {loading ?
      (
      <p>Fetching...</p>
      )
      : (
        <QuoteContainer>
          <ImgContainer>
            <img src="https://purepng.com/public/uploads/large/purepng.com-curtainscurtainsdrapepiece-of-clothcovering-1701527923445lk8ec.png" alt="curtains-icon" />
          </ImgContainer>
          <CoolQuote>
            <p> { selected ? `Selected: ${selected}` : 'Pick one!'}</p>
            <p> {quote ? quote : ''} </p>
            <div className="fading-effect" />
          </CoolQuote>
        </QuoteContainer>
      )
    }
  </Container>
);

export default Quote;
