import React, { createContext, useCallback, useContext } from 'react';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvaider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('adToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('UserAuth must be used within a AuthProvaider');
  }

  return context;
}

export { ToastProvaider, useToast };
