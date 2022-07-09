import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";
import store from './store/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Auth0Provider
        domain="dev-j62go36g.us.auth0.com"
        clientId="699duSJquLgBQ2pD3pC07dDh5vLMs8k8"
        redirectUri={window.location.origin}
        >

    <App />
        </Auth0Provider>

    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
