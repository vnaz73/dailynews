import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/header';
import Router from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import ReduxStore from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <Header />
      <Router />
    </Provider>
  </React.StrictMode>
);
