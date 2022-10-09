import React, { Component } from 'react';
import TodoItem from './TodoItem';

//we will use a static todo list for now
const TodoListItems = [
  {
    id: 1,
    text: 'Learn React',
    completed: false,
    priority:"HIGH"
  },
  {
    id: 2,
    text: 'Learn Node Js',
    completed: true,
    priority:"MEDIUM"
  },
  {
    id: 3,
    text: 'Learn PHP',
    completed: false,
    priority:"URGENT"
  },
  {
    id: 4,
    text: 'Learn Laravel Framework',
    completed: true,
    priority:"LOW"
  },,
];
class TodoList extends Component {
  render() {
    return (
      <ol className='todo-list-container'>
        {TodoListItems.map((item) => (
          <TodoItem todo={item} key={item.id} />
        ))}
      </ol>
    );
  }
}

export default TodoList;
