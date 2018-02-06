import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import '../../styles.scss';

import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';

export default () => (
  <Fragment>
    <Route exact path="/" component={Page1} />
    <Route exact path="/Page2" component={Page2} />
    <Route exact path="/Page3" component={Page3} />
  </Fragment>
);

