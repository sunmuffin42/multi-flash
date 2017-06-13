import React from 'react';
import MainNavBar from './MainNavBar';

import CardInputEntries from './CardInputEntries';


export default class CreateCardsPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }
  setCardCount(e){
    e.preventDefault(); // prevents page reload
    this.setState({count: this.refs.cardCount.value})
  }

  render(){
    return (
      <div>
        <h1>New Deck Page</h1>
        <MainNavBar/>

        {/* form here, then have seperate component for list of card entries*/}
        <form onSubmit={this.setCardCount.bind(this)}>
          <input type="text" ref="cardCount"></input>
          <button type="submit">Go</button>
        </form>

        <CardInputEntries count={this.state.count}/>

      </div>
    );
  }
}
