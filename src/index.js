import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto|Big+Shoulders+Text|Rock+Salt|Cinzel&display=swap');
    body {
        margin:0;
    }
`

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
