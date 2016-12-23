import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main'

require("./css/main.scss");

if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);