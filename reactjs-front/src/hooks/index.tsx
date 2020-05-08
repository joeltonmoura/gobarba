import React from 'react';

import { AuthProvaider } from './auth';
import { ToastProvaider } from './toast';

const AppProvaider: React.FC = ({ children }) => (
  <AuthProvaider>
    <ToastProvaider>{children}</ToastProvaider>
  </AuthProvaider>
);

export default AppProvaider;
