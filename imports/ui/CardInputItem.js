import React from 'react';
import MainNavBar from './MainNavBar';

export default class CardInputEntries extends React.Component{
  render(){
    return (
      <div>
        <span>Card #{this.props._id} </span>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
      </div>
    );
  }
}
