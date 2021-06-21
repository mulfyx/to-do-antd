import { StrictMode } from 'react';
import { render } from 'react-dom';

import './styles/globals.css';

import { App } from './components/App';
import { GlobalStyle } from './styles/global-style';

render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
