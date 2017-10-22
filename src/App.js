import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Route } from 'react-router-dom' // eslint-disable-line no-unused-vars
import ListContacts from './ListContacts' // eslint-disable-line no-unused-vars
import CreateContact from './createContact' // eslint-disable-line no-unused-vars
import * as ContactsAPI from './utils/ContactsAPI' // eslint-disable-line no-unused-vars

class App extends Component {
	state = {
		contacts: []
	}

	componentDidMount () {
		ContactsAPI.getAll().then((contacts) => {
			this.setState({ contacts })
		})
	}

	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((c) => c.id !== contact.id)
		}))

		ContactsAPI.remove(contact)
	}

	createContact = (contact) => {
		ContactsAPI.create(contact).then(contact => {
			this.setState(state => ({
				contacts: state.contacts.concat([ contact ])
			}))
		})
	}

	render() {
		return (
		  <div>
			<Route exact path='/' render={() => (
			  <ListContacts
				onDeleteContact={this.removeContact}
				contacts={this.state.contacts}
			  />
			)}/>
			<Route path='/create' render={({ history }) => (
			  <CreateContact
				onCreateContact={(contact) => {
				  this.createContact(contact)
				  history.push('/')
				}}
			  />
			)}/>
		  </div>
		)
	}
}

export default App
