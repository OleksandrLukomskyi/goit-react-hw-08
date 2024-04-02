import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'modern-normalize';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <App/>
            </HelmetProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
 </React.StrictMode>
);
