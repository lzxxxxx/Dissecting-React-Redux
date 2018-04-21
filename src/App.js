import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ControlPanel from './ControlPanel';
import TodoApp from './TodoApp';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
