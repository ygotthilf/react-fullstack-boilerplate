import React from 'react';
import {State, Link} from 'react-router';

export default React.createClass({

  mixins: [State],

  render() {
    var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
    var className = isActive ? 'RouteTab active' : 'RouteTab';
    var link = (
      <Link {...this.props} />
    );
    return <li className={className}>{link}</li>;
  }
});
