import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/HelloWorldApp';
// import CounterApp from './components/CounterApp';
import '../src/styles.css';

const person = {};

ReactDOM.createRoot(
    document.getElementById( 'root' )
).render(
    <React.StrictMode>
        <App person={ person } />
        {/* <CounterApp value={ 9 } /> */}
    </React.StrictMode>
);