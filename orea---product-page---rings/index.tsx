
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

declare global {
  interface Window {
    OREA_PRODUCT_DATA?: any;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// If we are on Shopify, use the data passed from Liquid
const shopifyProduct = window.OREA_PRODUCT_DATA || null;

root.render(
  <React.StrictMode>
    <App initialProduct={shopifyProduct} />
  </React.StrictMode>
);
