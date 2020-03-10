import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './organisms/Navbar';
import Sidebar from './organisms/Sidebar';
import '../style.css';

const Main = styled('main')`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  grid-template-areas: "main main main sidebar";
`;

const GridChildren = styled('section')`
  grid-area: main;
`;

const GridProfile = styled('section')`
  grid-column-start: 4;
  grid-column-end: 5;
  justify-self: start;
`;

const App = ({ children }) => (
  <div>
    <Navbar />
    <Main>
      <GridChildren>
        {children}
      </GridChildren>
      <GridProfile>
        <Sidebar />
      </GridProfile>
    </Main>
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
