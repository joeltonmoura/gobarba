import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/Signin';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyles />
    </>
  );
};

export default App;
