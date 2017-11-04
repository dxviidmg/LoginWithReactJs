import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
//import  '.node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';

const WithRouter = () => (
<BrowserRouter>
<App/>
</BrowserRouter>
	);

ReactDOM.render(
  <WithRouter />,
  document.getElementById('root')
);