import React, { Component } from 'react';
import Todo from './Todo'; /* code changed */

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} /> /* code changed */
    });

    return(
      <ul>
        {todos} STOP IT LEARN ITS A CODEALONG PLS LEMME SUBMIT OMG WTF BBQ
      </ul>
    );
  }
};

export default Todos;
