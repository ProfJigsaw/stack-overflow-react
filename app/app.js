import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';
import '../public/css/index.scss';

ReactDom.render(
    <Routes />,
    document.getElementById('root')
);
