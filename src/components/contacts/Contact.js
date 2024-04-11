import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, tel, email } = this.props;
    return (
      <div>
        <h1>Contact : {name} </h1>
        <ul>
          <li>Tel : {tel} </li>
          <li>Email : {email} </li>
        </ul>
      </div>
    );
  }
}
Contact.defaultProps = {
  name: "My Name",
  tel: "000000000",
  email: "my@email.com",
};

export default Contact;
