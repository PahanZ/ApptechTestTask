import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import Aside from './Aside';

const Main = props => (
  <main className="main">
    <Aside
      program={props.program}
      setProgram={props.setProgram}
      choiceParams={props.choiceParams}
      params={props.params}
    />
    <Content />
  </main>
);

export default Main;


Main.propTypes = {
  params: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
  setProgram: PropTypes.func.isRequired,
  choiceParams: PropTypes.func.isRequired,
  program: PropTypes.string.isRequired,
};
