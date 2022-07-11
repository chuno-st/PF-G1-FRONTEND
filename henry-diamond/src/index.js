import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";
import store from './store/store.js';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Auth0Provider
            domain="dev-j62go36g.us.auth0.com"
            clientId="699duSJquLgBQ2pD3pC07dDh5vLMs8k8"
            redirectUri={window.location.origin}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Auth0Provider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );




  reportWebVitals();

