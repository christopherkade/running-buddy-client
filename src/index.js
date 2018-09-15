import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Rooting/Root';
import rootReducer from './Reducer';

const store = createStore(rootReducer);

render(<Root store={store} />, document.getElementById('root'));
