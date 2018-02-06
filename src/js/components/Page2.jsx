import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Page2 = (props) => {
  console.log(props);
  return (
    <div>
    Page2
      <Link to="/Page3" > Page3</Link >
    </div >
  );
};


const mapStateToProps = state => ({
  program: state.setProgram,
  data: state.choice,
});


export default (connect(mapStateToProps)(Page2));
