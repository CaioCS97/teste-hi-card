import React, { useState } from "react";

import {
  Card,
  FormControl,
  TextField,
  Tooltip,
  IconButton
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import PlanetDropdown from "../PlanetDropdown/PlanetDropdown";
import "./TodoForm.scss";

const TodoForm = ({ addTask }) => {
  const [planetValue, setPlanetValue] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!description || !planetValue) return;
    addTask({ planetValue, description });
    setPlanetValue("");
    setDescription("");
  };

  const callback = e => {
    setPlanetValue(e);
  };
  return (
    <Card className="cards">
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <FormControl className="formControl">
          <PlanetDropdown
            callbackPlanets={callback}
            label="Planets"
          />
          <TextField
            className="textField"
            value={description}
            onChange={event => setDescription(event.target.value)}
            label="Description"
          />
        </FormControl>
        <div className="buttons">
          <Tooltip title="Add a new Card">
            <IconButton type="submit">
              <AddIcon color="primary" />
            </IconButton>
          </Tooltip>
        </div>
      </form>
    </Card>
  );
};
export default TodoForm;

