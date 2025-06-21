import App from "./App";
import React from "react";
import './index.css';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
)