import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

import Photo from './Photo';
import Quote from './Quote';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    color: white;
    font-size: 16px;
    font-family: "Source Sans Pro", sans-serif;
  }
`;

const View = styled.main`
  height: 100%;
  width: 100vw;
  display: flex;
`;

const displayError = () => {
  this.setState({ quote: 'Unable to display quotes' });
};

class App extends Component {
  state = {
    quote: '',
    selected: '',
  }

  handleClick = async (e) => {
    const selected = e.target.name;

    if (selected === 'Ron Swanson') {
      await this.setState({ selected });
      this.fetchRonSwanson();
    }
    else if (selected === 'Breaking Bad') {
      await this.setState({ selected });
      this.fetchBreakingBad()
    }
    else {
      displayError();
    }
  }

  fetchBreakingBad = async () => {
    await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      .then(response => response.json())
      .then(quote => this.setState({ quote: quote[0].quote }))
      .catch(() => displayError());
  }

  fetchRonSwanson = async () => {
    await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => response.json())
      .then(quote => this.setState({ quote: quote[0] }))
      .catch(() => displayError());
  }

  render() {
    const { quote, selected } = this.state;

    return (
      <View>
        <GlobalStyles />
        <Photo
          handleClick={this.handleClick}
        />
        <Quote
          quote={quote}
          selected={selected}
        />
      </View>
    );
  }
}

App.propTypes = {
  quote: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
}

App.defaultProps = {
  quote: '',
  selected: '',
}

export default App;
