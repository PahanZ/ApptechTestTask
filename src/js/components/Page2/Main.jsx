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
        firstInstallment={props.firstInstallment}
        monthlyInstallment={props.monthlyInstallment}
      />
      <Content
        data={props.data}
        firstInstallment={props.firstInstallment}
        monthlyInstallment={props.monthlyInstallment}
        setFirstInstallment={props.setFirstInstallment}
        setMonthlyInstallment={props.setMonthlyInstallment}
        choiceStrategy={props.choiceStrategy}
      />
    </main>
  );
};

Main.propTypes = {
  data: PropTypes.shape({
    Entries: PropTypes.string,
  }).isRequired,
  program: PropTypes.string.isRequired,
  firstInstallment: PropTypes.string.isRequired,
  monthlyInstallment: PropTypes.string.isRequired,
  setFirstInstallment: PropTypes.func.isRequired,
  setMonthlyInstallment: PropTypes.func.isRequired,
  choiceStrategy: PropTypes.func.isRequired,
};

export default Main;

