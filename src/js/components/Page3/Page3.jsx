import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';

const Page3 = () => (
  <Fragment>
    <Header />
    <Link to="/" > Page1</Link >
  </Fragment>
);

const mapStateToProps = state => ({
  program: state.setProgram,
  data: state.choice,
});


export default (connect(mapStateToProps)(Page3));
