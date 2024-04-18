import React, { Component } from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactToggle: true,
  };

  showContact() {
    console.log("Salam Machlou");
    this.setState({
      showContactToggle: false,
    });
    console.log(this.state.showContactToggle);
  }

  render() {
    const { name, tel, email } = this.props.data;
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            {name}{" "}
            <i onClick={this.showContact} className="fa fa-sort-down"></i>{" "}
          </h4>
          <p className="card-text">
            {this.state.showContactToggle ? (
              <ul className="list-group">
                <li className="list-group-item">tel :{tel} </li>
                <li className="list-group-item">email : {email} </li>
              </ul>
            ) : null}
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
