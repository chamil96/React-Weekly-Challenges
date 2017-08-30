// EASY:  Pass a prop for "name" into the component you just created so the h1 tag reads, "Hello world, {name}" Please refer to App.js to see where name is plugged in

import React, { Component } from 'react';

/*
function Header(props){
  return (
    <h1>Hello world!</h1>
  )
}
*/

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <h1>Hello world, {name}</h1>
    )
  }
}

export default Header;
