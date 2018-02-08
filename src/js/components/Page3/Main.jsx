import React from 'react';
import PropTypes from 'prop-types';
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

Main.propTypes = {
  program: PropTypes.string.isRequired,
  data: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
};

export default Main;
