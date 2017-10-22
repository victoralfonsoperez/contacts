/*global it*/
import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom' // eslint-disable-line no-unused-vars
import App from './App' // eslint-disable-line no-unused-vars

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<App />, div)
})
