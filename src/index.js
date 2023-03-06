import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/HelloWorldApp';
import '../src/styles.css';

const person = { name: 'Juan Carlos', age: 45 };


ReactDOM.createRoot(
    document.getElementById( 'root' )
).render(
    <React.StrictMode>
        <App title='App Component' person={ person } />
    </React.StrictMode>
);