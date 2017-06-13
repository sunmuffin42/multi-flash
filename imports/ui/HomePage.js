import React from 'react';
import MainNavBar from './MainNavBar';

export default class HomePage extends React.Component{
  render(){
    return (
      <div>
          <h1>Home Page</h1>
          <MainNavBar/>
      </div>
    );
  }
}
