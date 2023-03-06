import React from 'react';
import ReactDOM from 'react-dom/client';


// Functional Component
function App() {
    return (
        <h1>Hello, World!</h1>
    )
}


ReactDOM.createRoot(
    document.getElementById( 'root' )
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);