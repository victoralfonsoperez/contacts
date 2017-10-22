import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import ListContacts from './ListContacts' // eslint-disable-line no-unused-vars
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

	render() {
		return <div>
			<ListContacts
				onDeleteContact={this.removeContact}
				contacts={this.state.contacts}
			/>
		</div>
	}
}

export default App
