import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './contexts/DataProvider.js';
import { AuthProvider } from './contexts/AuthProvider.js';
import { UserProvider } from './contexts/UserDataProvider.js';
import { AddressProvider } from './contexts/AddressProvider.js';
import { WagmiProvider } from 'wagmi';
import { wagmiConfig } from './helpers/wagmiConfig.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Call make Server
makeServer();

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <UserProvider>
            <AddressProvider>
              <WagmiProvider config={wagmiConfig}>
                <QueryClientProvider client={queryClient}>
                  <App />
                </QueryClientProvider>
              </WagmiProvider>
            </AddressProvider>
          </UserProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
