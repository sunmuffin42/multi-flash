import React from 'react';
import { Link } from 'react-router';

export default class MainNavBar extends React.Component{
  render(){
    return (
      <div id="top">
        <div id="topnav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">Make a new deck</Link></li>
          <li><Link to="/view">View Decks</Link></li>
          <li><Link to="/practice">Practice</Link></li>
        </div>
      </div>
    );
  }
}
