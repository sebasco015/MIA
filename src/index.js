import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';
import { store, persist } from './redux/store';

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={null} persistor={persist}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);