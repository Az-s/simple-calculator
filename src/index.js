import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import './index.css';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
      <App/>
    </Provider>
);

ReactDOM.render(app , document.getElementById('root'));
