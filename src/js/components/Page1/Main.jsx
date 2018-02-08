import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Content from './Content';
import Aside from './Aside';
import { setProgram, choiceParams } from '../../redux/actions';

const Main = props => {
  console.log(props.location.pathname);
  return (
  <main className="main">
    <Aside
      program={props.program}
      setProgram={props.setProgram}
      choiceParams={props.choiceParams}
      data={props.data}
    />
    <Content />
  </main>
)};

const mapStateToProps = state => ({
  program: state.setProgram,
  data: state.choiceParams,
});

const mapDispatchToProps = {
  setProgram,
  choiceParams,
};

Main.propTypes = {
  data: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
  setProgram: PropTypes.func.isRequired,
  choiceParams: PropTypes.func.isRequired,
  program: PropTypes.string.isRequired,
};

export default (connect(mapStateToProps, mapDispatchToProps)(Main));
