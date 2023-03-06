import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/HelloWorldApp';
import '../src/styles.css';

const message = 'This is my first app.';


ReactDOM.createRoot(
    document.getElementById( 'root' )
).render(
    <React.StrictMode>
        <App 
            name = 'Juan Carlos'
            message={ message } 
        />
    </React.StrictMode>
);