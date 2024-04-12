import React, { Component } from "react";
import "./Contact.css";
class Contact extends Component {
  render() {
    const { name, tel, email } = this.props;
    return (
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{name}</h4>
          <p class="card-text">
            <ul class="list-group">
              <li class="list-group-item">Tel :{tel} </li>
              <li class="list-group-item">Email : {email} </li>
            </ul>
          </p>
        </div>
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
