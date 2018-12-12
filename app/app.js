import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import '../public/css/index.scss';

ReactDom.render(
    <BrowserRouter><Provider store={store}>
        <Routes />
    </Provider></BrowserRouter>,
    document.getElementById('root')
);
