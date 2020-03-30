import React, { useState } from "react";

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider
} from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";

import TodoForm from "../TodoForm/TodoForm";
import CardComponent from "../CardComponent/CardComponent";
import "./Tasks.scss";

const Tasks = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="center">
      <div className="container">
        <TodoForm addTask={addTodo} />
        {todos.map((todo, index) => (
          <CardComponent
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}

        {todos.map((task, index) => (
          <List key={index}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ListIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={task.text.planetValue}
                secondary={task.text.description}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
      </div>
    </div>
  );
};
export default Tasks;
