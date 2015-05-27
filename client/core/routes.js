import React from 'react';
import Router, {Route, DefaultRoute, HashLocation} from 'react-router';
import App from '../components/app/App';
import TodoApp from '../components/todo/Todo';
import About from '../components/about/About';

const routes = (
  <Route handler={App}>
    <Route name="about" handler={About}/>
    <DefaultRoute handler={TodoApp}/>
  </Route>
);

Router.run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('app'));
});
