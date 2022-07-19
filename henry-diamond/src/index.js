import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react"; //cambiamos a un provider con historial de navegación vvvvvvvvvvvv
//import Auth0ProviderWithHistory from './auth/auth0-provider-width-history';
import store from './store/store.js';
import { BrowserRouter } from 'react-router-dom';
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            cacheLocation="localstorage">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Auth0Provider>
        </Provider>
    </React.StrictMode>,
document.getElementById('root')
);

reportWebVitals();

