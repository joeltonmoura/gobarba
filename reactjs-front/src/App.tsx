import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';

import Routes from './routes';

import AppProvaider from './hooks';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvaider>
        <Routes />
      </AppProvaider>

      <GlobalStyles />
    </Router>
  );
};

export default App;
