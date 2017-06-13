import React from 'react';
import MainNavBar from './MainNavBar';
import CardInputItem from './CardInputItem'

export default class CardInputEntries extends React.Component{
  renderCards(){
    var list = [];
    let count = this.props.count;
    for (var i = 0; i < count; i++){
      list.push(<CardInputItem/>);
    }
    return list;
  }
  render(){
    return (
      <div>
        <p>Populate {this.props.count} cards.</p>
        {this.renderCards()}
      </div>
    );
  }
}
