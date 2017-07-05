import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';
import Button from './components/Button/Button';

const AppContainer = styled.div`text-align: center;`;
const AppIntro = styled.p`font-size: large;`;
const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const logoAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${logoAnimation} infinite 20s linear;
  height: 80px;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
        <Button>Hello Button</Button>
      </AppContainer>
    );
  }
}

export default App;
