import React from 'react';
import Content from './Content';
import Aside from './Aside';

export default props => (
  <main className="main">
    <Aside program={props.program} setProgram={props.setProgram} choiceParams={props.choiceParams} params={props.params} />
    <Content />
  </main>
);

