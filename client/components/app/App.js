import React from 'react';
import {RouteHandler} from 'react-router';
import RouteTab from '../route-tab/RouteTab';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="header">
          <ul className="nav nav-pills pull-right">
            <RouteTab to="/">Home</RouteTab>
            <RouteTab to="about">About</RouteTab>
          </ul>
          <h3 className="text-muted">react boilerplate</h3>
        </div>

        <div className="jumbotron">
          <RouteHandler />
        </div>
      </div>
    );
  }
}
