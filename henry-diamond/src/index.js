import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import { Auth0Provider } from "@auth0/auth0-react"; //cambiamos a un provider con historial de navegación vvvvvvvvvvvv
import Auth0ProviderWithHistory from './auth/auth0-provider-width-history';
import store from './store/store.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Auth0ProviderWithHistory>
                    <App />
                </Auth0ProviderWithHistory>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

