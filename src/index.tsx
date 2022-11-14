import GlobalStyle from '@styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from '@providers/AuthProvider';
import ToastProvider from '@providers/ToastProvider';
import UserInfoProvider from '@providers/UserInfoProvider';
import App from './App';
import { store } from './store/store';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AuthProvider>
            <UserInfoProvider>
              <ToastProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </ToastProvider>
            </UserInfoProvider>
          </AuthProvider>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
