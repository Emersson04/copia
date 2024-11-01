import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/Router';
import { ProviderContext } from './components/configs/ProviderContext';

const App = () => {
  return (
    <BrowserRouter>
      <ProviderContext>
        <AppRouter />
      </ProviderContext>
    </BrowserRouter>
  );
};

export default App;
