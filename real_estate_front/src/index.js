import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App/App';
import 'bootstrap'
import watchFilesData from "./store/files/sagas";
import watchAuth from "./store/auth/sagas";
import {store, sagaMiddleware} from "./store/_config";


sagaMiddleware.run(watchFilesData);
sagaMiddleware.run(watchAuth);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);