import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';

import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './Ducks/Root';
import { APP_THEME } from './Shared/theme';

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <ThemeProvider theme={APP_THEME}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
