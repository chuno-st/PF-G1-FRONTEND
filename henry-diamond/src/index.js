import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";
import store from './store/store.js';
import { BrowserRouter } from 'react-router-dom';
/*const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;*/
/*REACT_APP_AUTH0_DOMAIN=dev-qkovfz2t.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=MLEfWPyhmbMJI7btV70HIyykJlB1lex1
REACT_APP_AUTH0_AUDIENCE=https://express.sample/
REACT_APP_SERVER_URL=http://localhost:3000/ */
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Auth0Provider
            domain="dev-qkovfz2t.us.auth0.com"
            clientId="MLEfWPyhmbMJI7btV70HIyykJlB1lex1"
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

