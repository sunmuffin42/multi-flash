import React from 'react';

export default class MainNavBar extends React.Component{
  render(){
    return (
      <div id="top">
        <div id="topnav">
          <li><a href="./try1.html">Home</a></li>
          <li><a href="./newtry1.html">Make a new deck</a></li>
    			<li><a href="./edittry1.html">View and edit your decks</a></li>
    			<li id="here"><a href="./practicetry1.html">Practice with your decks</a></li>
        </div>
      </div>

    );
  }
}
