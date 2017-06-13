import React from 'react';
import MainNavBar from './MainNavBar';

export default class CardInputEntries extends React.Component{
  render(){
    return (
      <div>
        <p>Populate {this.props.count} cards.</p>
      </div>
    );
  }
}
