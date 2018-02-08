import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Content from './Content';
import Aside from './Aside';

const Main = (props) => {
  // console.log(props);
  return (
    <main className="main">
      <Aside
        program={props.program}
        data={props.data}
      />
      <Content
        program={props.program}
        data={props.data}
      />
    </main>
  );
};

const mapStateToProps = state => ({
  program: state.setProgram,
  data: state.choiceParams,
});

Main.propTypes = {
  program: PropTypes.string.isRequired,
  data: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
};

export default (connect(mapStateToProps)(Main));
