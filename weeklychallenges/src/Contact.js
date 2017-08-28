import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isCallMade: false,
    };
  }


  handleClick() {
    this.setState({
      isCallMade: true,
    })
  }


  render() {

    const { firstName, lastName, phoneNumber } = this.props;
    const { isCallMade } = this.state;
    let iconColor = "orange";
    if (isCallMade) {
      iconColor = "green";
    }
    // check isCallMade value and set value of background color var accordingly
    // use color var for icon color

    return (
      <div>
      <p className="sentence">You need to contact {firstName} {lastName} at {phoneNumber}<i className="fa-p fa fa-square" style={{color:iconColor}} /></p>
      <button type="button" onClick={this.handleClick}>Call</button>
      </div>
    );
  }

}
// VERY HARD: In your list of Contacts, have a status icon by each one that starts as orange "Pending" status. Then have a call button that when clicked, changes the state to a green "Done" status.

export default Contact;
