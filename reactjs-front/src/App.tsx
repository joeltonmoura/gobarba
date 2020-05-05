import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

import { AuthProvaider } from './hooks/auth';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => {
  return (
    <>
      <AuthProvaider>
        <SignIn />
      </AuthProvaider>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
};

export default App;
