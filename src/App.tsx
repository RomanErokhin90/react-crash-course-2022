import React, {createElement as e} from 'react';
import logo from './logo.svg';

function App() {
  // return (
  //   <h1>Hello react!!!</h1>
  // );
  return e('div',{classname: 'container'},[
    e('h1',{classname: 'font-bold'},'Test JSX'),
    e('button',{className: ''},'Click me')
  ])
}

export default App;
