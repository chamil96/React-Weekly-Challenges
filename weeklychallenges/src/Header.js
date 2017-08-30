// EASY:  Pass a prop for "name" into the component you just created so the h1 tag reads, "Hello world, {name}" Please refer to App.js to see where name is plugged in

import React, { Component } from 'react';

// VERY EASY: Create a React class component that renders "hello world" in an h1 tag. You don't need props for this one.
/*
function Header(){
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
