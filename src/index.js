import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Rooting/Root';
import configureStore from './Reducer/ConfigureStore';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
