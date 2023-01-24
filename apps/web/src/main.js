import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '@store';
import { routes } from '@store/router';
import { ThemeProvider } from '@mui/material';
import { theme } from './core/theme/index';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);