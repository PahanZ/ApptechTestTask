import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import '../../styles.scss';

import Header from './Header';
import Page1 from './Page1/Main';
import Page2 from './Page2/Main';
import Page3 from './Page3/Main';

export default (props) => {
  // console.log(path);
  return (
  <Fragment>
    <Header />
    <Route exact path="/" component={Page1} />
    <Route exact path="/Page2" component={Page2} />
    <Route exact path="/Page3" component={Page3} />
  </Fragment>
)};

