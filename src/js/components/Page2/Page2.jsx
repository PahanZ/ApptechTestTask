import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';

const Page2 = (props) => {
  // console.log(props.data);
  return (
    <Fragment>
      <Header />
      <Main program={props.program} data={props.data} />    
    </Fragment>
  );
};


const mapStateToProps = state => ({
  program: state.setProgram,
  data: state.choice,
});


export default (connect(mapStateToProps)(Page2));
