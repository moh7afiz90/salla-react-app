import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyPolyfills, defineCustomElements } from 'salla-checkout/loader';

ReactDOM.render(<App />, document.getElementById('root'));

applyPolyfills().then(() => {
  defineCustomElements(window);
});