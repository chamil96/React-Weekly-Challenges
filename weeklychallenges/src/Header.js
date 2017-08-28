import React, { Component } from 'react';

/*
function Header(props){
  return (
    <h1>Hello world, {props.name}</h1>
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
