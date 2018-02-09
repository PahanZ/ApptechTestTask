import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles.scss';

import Header from './Header';
import Page1 from './Page1/Main';
import Page2 from './Page2/Main';
import Page3 from './Page3/Main';

const App = (props) => {
  // console.log(props);
  return (
    <Fragment>
      <Header currentPage={props.location.pathname} />
      <Route exact path="/" component={Page1} />
      <Route exact path="/Page2" component={Page2} />
      <Route exact path="/Page3" component={Page3} />
    </Fragment>
  );
};
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(connect()(App));
