import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import escapeRegExp from 'escape-string-regexp' // eslint-disable-line no-unused-vars
import sortBy from 'sort-by' // eslint-disable-line no-unused-vars

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = query => {
    this.setState({ query: query.trim() })
  }

  render() {
	  let showingContacts // eslint-disable-line no-unused-vars
	  if (this.state.query) {
		const match = new RegExp(escapeRegExp(this.state.query), 'i')
		showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
	  } else {
		  showingContacts = this.props.contacts
	  }

	  showingContacts.sort(sortBy('name'))

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contacts"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className="contact-list">
          {showingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button
                onClick={() => this.props.onDeleteContact(contact)}
                className="contact-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts
