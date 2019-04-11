import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'saeed',
        email: 'saeed@gmail.com',
        phone: '123-568-978'
      },
      {
        id: 2,
        name: 'saeeddddd',
        email: 'saeewesdfd@gmail.com',
        phone: '123-568-978'
      },
      {
        id: 3,
        name: 'sseaerr',
        email: 'sasegmaee2l.com',
        phone: '1233331-5df368-978'
      },
      {
        id: 4,
        name: 'sseaersssr',
        email: 'sasegseemaee2l.com',
        phone: '1233331-5df368-978'
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
