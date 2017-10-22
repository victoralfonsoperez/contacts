import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import ListContacts from './ListContacts'; // eslint-disable-line no-unused-vars

const contacts = [
  {
    id: 'ryan',
    name: 'Ryan Florence',
    email: 'ryan@reacttraining.com',
    avatarURL: 'http://localhost:5001/ryan.jpg'
  },
  {
    id: 'michael',
    name: 'Michael Jackson',
    email: 'michael@reacttraining.com',
    avatarURL: 'http://localhost:5001/michael.jpg'
  },
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    email: 'tyler@reacttraining.com',
    avatarURL: 'http://localhost:5001/tyler.jpg'
  }
];

class App extends Component {
  render() {
    return <ListContacts contacts={contacts} />;
  }
}

export default App;
