import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes/index';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes />
    <Footer />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
