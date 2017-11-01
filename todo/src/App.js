import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__title">To Do List</div>
        <AddTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
