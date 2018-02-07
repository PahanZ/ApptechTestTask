import React from 'react';
import Content from './Content';
import Aside from './Aside';

export default (props) => {
  // console.log(props);
  return (
    <main className="main">
      <Aside program={props.program}
        data={props.data}
        firstInstallment={props.firstInstallment}
        monthlyInstallment={props.monthlyInstallment}
      />
      <Content data={props.data}
        setFirstInstallment={props.setFirstInstallment}
        setMonthlyInstallment={props.setMonthlyInstallment}
        choiceStrategy={props.choiceStrategy}
      />
    </main>
  );
};
