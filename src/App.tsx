import React from 'react';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import Calculari from './components/Calculari';
import AnimeSeason from './components/AnimeSeason';
import Organizer from './components/Organizer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const AppContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: papayawhip;
`;

function App() {
  
  return (
    <Router>
      <AppContainer>
        <NavBar />
        <Routes>
          <Route path="/" Component={Calculari}/>
          <Route path="/calculari" Component={Calculari}/>
          <Route path="/animeseason" Component={AnimeSeason}/>
          <Route path="/organizer" Component={Organizer}/>
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
