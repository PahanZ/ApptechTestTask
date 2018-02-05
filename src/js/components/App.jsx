import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';
import { setProgram, choice } from '../redux/actions';

const App = (props) => {
  // console.log(props);
  return (
    <Fragment>
      <Header />
      <Main
        program={props.program}
        setProgram={props.setProgram}
        choiceParams={props.choice}
        params={props.data}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  program: state.setProgram,
  data: state.choice,
});

const mapDispatchToProps = {
  setProgram,
  choice,
};

export default (connect(mapStateToProps, mapDispatchToProps)(App));
