import React from 'react';
import ReactDOM from 'react-dom/client';
import DbzApp from './DbzApp';
import '../src/styles.css';
ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <DbzApp/>
    </React.StrictMode>
);
