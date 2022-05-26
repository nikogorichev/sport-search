import React from 'react';
import './index.css';
import App from './components/App/App';
import * as ReactDOMClient from 'react-dom/client';
import { store as globalStore } from './redux/store'
import { Provider } from 'react-redux';

const container = document.querySelector('#root')
const root = ReactDOMClient.createRoot(container)

root.render( <Provider store={globalStore}><App /></Provider>);

