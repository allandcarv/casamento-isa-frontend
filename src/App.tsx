import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Footer from './components/footer';
import Routes from './routes/index';
import { LoadingProvider } from './context/LoadingContext';

const App: React.FC = () => (
  <BrowserRouter>
    <LoadingProvider>
      <Routes />
    </LoadingProvider>
    <Footer />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
