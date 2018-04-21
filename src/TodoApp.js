import {Component} from 'react';
import Todos from './todos';
import Filer from './filter';

function TodoApp (){
  return (
    <div>
      <Todos />
      <Filter />
    </div>
  )
}

export default TodoApp;