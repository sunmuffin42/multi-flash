import ReactDOM from 'react-dom';
import React from 'react';
import { Meteor } from 'meteor/meteor';

import {Router, Route, browserHistory} from 'react-router';

import HomePage from './../imports/ui/HomePage';
import NewDeckPage from './../imports/ui/NewDeckPage';
import ViewDecksPage from './../imports/ui/ViewDecksPage';
import PracticePage from './../imports/ui/PracticePage';
import NotFoundPage from './../imports/ui/NotFoundPage';


const routes = (
  <Router history={browserHistory}>
    <route path="/" component={HomePage}></route>
    <route path="/new" component={NewDeckPage}></route>
    <route path="/view" component={ViewDecksPage}></route>
    <route path="/practice" component={PracticePage}></route>
    <route path="*" component={NotFoundPage}></route>
  </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes,document.getElementById('render-target'));
});
