import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';
import Footer from './components/footer';
import Routes from './routes/index';
import { LoadingProvider } from './context/LoadingContext';
import ToastContainer from './components/toast';

const App: React.FC = () => (
  <BrowserRouter>
    <LoadingProvider>
      <Routes />
    </LoadingProvider>
    <Footer />
    <GlobalStyle />
    <ToastContainer />
  </BrowserRouter>
);

export default App;
