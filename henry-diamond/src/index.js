import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";
import store from './store/store.js';
import { BrowserRouter } from 'react-router-dom';
import config from '../config'
/*REACT_APP_AUTH0_DOMAIN=dev-qkovfz2t.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=MLEfWPyhmbMJI7btV70HIyykJlB1lex1
REACT_APP_AUTH0_AUDIENCE=https://express.sample/
REACT_APP_SERVER_URL=http://localhost:3000/ */
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Auth0Provider
            domain={config.AUTH0_DOMAIN}
            clientId={config.CLIENT_ID}
            redirectUri={window.location.origin}
            cacheLocation="localstorage"
            audience="https://express.sample">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Auth0Provider>
        </Provider>
    </React.StrictMode>,
document.getElementById('root')
);

reportWebVitals();

