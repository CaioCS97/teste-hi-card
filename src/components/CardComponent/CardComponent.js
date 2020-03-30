import React from "react";

import {
  Card,
  FormControl,
  TextField,
  Tooltip,
  IconButton
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import "./CardComponent.scss";

const CardComponent = ({ todo, index, removeTodo }) => {
  return (
    <Card className="cards">
      <FormControl className="formControl">
        <TextField
          className="textField"
          value={todo.text.planetValue}
          label="Planets"
          disabled
        />
        <TextField
          className="textField"
          value={todo.text.description}
          label="Description"
          disabled
        />
      </FormControl>

      <div className="buttons">
        <Tooltip title="Excluir">
          <IconButton onClick={() => removeTodo(index)}>
            <DeleteOutlineIcon color="secondary" />
          </IconButton>
        </Tooltip>
      </div>
    </Card>
  );
};
export default CardComponent;
