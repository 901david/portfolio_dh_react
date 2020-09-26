import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducers from './Reducers/RootReducer';
import { APP_THEME } from './Shared/theme';

const loggerMiddleWare = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleWare, loggerMiddleWare)
);

ReactDOM.render(
  <ThemeProvider theme={APP_THEME}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
