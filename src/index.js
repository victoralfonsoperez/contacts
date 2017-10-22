import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom' // eslint-disable-line no-unused-vars
import { BrowserRouter} from 'react-router-dom' // eslint-disable-line no-unused-vars
import './index.css'
import App from './App' // eslint-disable-line no-unused-vars

ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>,
	document.getElementById('root')
)
