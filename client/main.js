import ReactDOM from 'react-dom';
import React from 'react';
import MainPage from './../imports/ui/MainPage';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    ReactDOM.render(<MainPage/>,document.getElementById('render-target'));
});
