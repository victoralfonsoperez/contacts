import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import ListContacts from './ListContacts' // eslint-disable-line no-unused-vars
import CreateContact from './createContact' // eslint-disable-line no-unused-vars
import * as ContactsAPI from './utils/ContactsAPI' // eslint-disable-line no-unused-vars

class App extends Component {
	state = {
		screen: 'list', //list, create
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

	render() {
		return <div>
			{this.state.screen === 'list' && (
			<ListContacts
				onDeleteContact={this.removeContact}
				contacts={this.state.contacts}
			/>
			)}
			{this.state.screen === 'create' && (
				<CreateContact />
			)}
		</div>
	}
}

export default App
