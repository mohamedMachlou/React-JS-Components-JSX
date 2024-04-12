import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: "34",
        name: "Mohamed Machlou",
        tel: "323456788",
        email: "me@email.com",
      },
      {
        id: "45",
        name: "Abdo Machlou",
        tel: "323456788",
        email: "me@email.com",
      },
      {
        id: "67",
        name: "Samir Machlou",
        tel: "323456788",
        email: "me@email.com",
      },
    ],
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact data={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
