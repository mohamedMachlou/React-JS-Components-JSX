import React, { Component } from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { name, tel, email } = this.props.data;
    return (
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{name}</h4>
          <p class="card-text">
            <ul class="list-group">
              <li class="list-group-item">tel :{tel} </li>
              <li class="list-group-item">email : {email} </li>
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

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Contact;
