import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars
import ImageInput from './ImageInput' // eslint-disable-line no-unused-vars
import serializeForm from 'form-serialize' // eslint-disable-line no-unused-vars

class CreateContact extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		const values = serializeForm(e.target, { hash: true })
		if (this.props.onCreateContact)
			this.props.onCreateContact(values)
	}

	render() {
		return (
			<div>
				<Link className="close-create-contact" to="/">Close</Link>
				<form onSubmit={this.handleSubmit} className="create-contact-form">
					<ImageInput
						className="create-contact-avatar-input"
						name="avatarURL"
						maxHeight={64}
					/>
					<div className="create-contact-details">
						<input type="text" name="name" placeholder="Name"/>
						<input type="text" name="email" placeholder="Email"/>
						<button>Add Contact</button>
					</div>
				</form>
			</div>
		)
	}
}

export default CreateContact