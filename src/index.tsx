import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import '../style/app.scss';

import rootReducer from 'reducer';
import App from 'component/app';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
