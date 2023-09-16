import React from 'react';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import Calculari from './components/Calculari';
import AnimeSeason from './components/AnimeSeason';
import Organizer from './components/Organizer';

const AppContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: papayawhip;
`;

function App() {
  
  return (
    <AppContainer>
      <NavBar />
      <Calculari />
      <AnimeSeason />
      <Organizer />
    </AppContainer>
  );
}

export default App;
