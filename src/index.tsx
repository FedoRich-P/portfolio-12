import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyled } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './components/theme/Theme.staled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={myTheme}>
    <App />
    <GlobalStyled></GlobalStyled>
  </ThemeProvider>
);

reportWebVitals();
