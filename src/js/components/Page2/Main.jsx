import React from 'react';
import Content from './Content';
import Aside from './Aside';

export default (props) => {
  // console.log(props);
return (
  <main className="main">
    <Aside program={props.program} data={props.data} />
    <Content data={props.data} />
  </main>
);
};
