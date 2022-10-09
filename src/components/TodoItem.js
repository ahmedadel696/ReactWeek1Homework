import React from 'react';

class TodoItem extends React.Component {

  render() {
    const { id, text, completed, priority } = this.props.todo;
    let p = () => {
      if (priority == 'HIGH') {
        return (
          <span style={{ fontSize: 30 }}>🔴</span>
        )
      } else if (priority == 'MEDIUM') {
        return (
          <span style={{ fontSize: 30 }}>🟠</span>
        )
      } else if (priority == 'LOW') {
        return (
          <span style={{ fontSize: 30 }}>🔻</span>
        )
      } else if (priority == 'URGENT') {
        return (
          <span style={{ fontSize: 30 }}>❗</span>
        )
      }
    }
    return (
      <li>

        <small>{id}</small>
        {p()}
        <header>
          <h1 style={completed ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{text}</h1>
        </header>
        {/* Homework:
            1. Add a checkbox to the todo item
            2. The checkbox should be checked if the todo is completed (completed === true)
        */}
        <input style={{ width: "40px", height: "50px" }} type="checkbox" checked={completed ? true : false} />
        <div>{completed.toString()}</div>
      </li>
    );
  }
}
export default TodoItem;
