import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions'; // Import action creators

const store = createStore(reducer);
const { dispatch, subscribe } = store;

const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
};
subscribe(update);

const { inc, dec, rnd, pls, mns, zero } = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('pls').addEventListener('click', pls);
document.getElementById('mns').addEventListener('click', mns);
document.getElementById('zero').addEventListener('click', zero);
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});

ReactDOM.render(
    <React.StrictMode>

    </React.StrictMode>,
    document.getElementById('root')
);
