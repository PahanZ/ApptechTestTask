import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';

const Page3 = (props) => {
  // console.log(props);
  return (
    <Fragment>
      <Header />
      <Main
        program={props.program}
        data={props.data}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  program: state.setProgram,
  data: state.choiceParams,
});


export default (connect(mapStateToProps)(Page3));
