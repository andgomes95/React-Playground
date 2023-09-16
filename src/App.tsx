import React from 'react';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import Calculari from './components/Calculari';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: papayawhip;
`;

function App() {
  
  return (
    <AppContainer>
      <NavBar />
      <Calculari />
    </AppContainer>
  );
}

export default App;
