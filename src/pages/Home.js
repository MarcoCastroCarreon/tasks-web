import React, { Fragment } from "react";
import {
  Grid,
  TextField,
  FormGroup,
  FormControl,
  Button,
  Snackbar,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

// own dependencies
import { Form } from "../index.styles";
import Alert from "../components/Alert";
import BlackLogo from "../img/black-thunder.png";

const Home = () => {
  const [taskForm, setTaskForm] = React.useState({
    id: Math.ceil(Math.random() * 10000),
    title: "",
    description: "",
  });

  const [error, setError] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);

  const handleChange = (event) => {
    setError(false);
    const { name, value } = event.target;
    setTaskForm({ ...taskForm, [name]: value });
  };

  const handleDelete = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskForm.title.length === 0 || taskForm.description.length === 0) {
      setError(true);
    }
    setTasks([...tasks, taskForm]);
    setTaskForm({
      id: Math.ceil(Math.random() * 10000),
      title: "",
      description: "",
    });
  };

  return (
    <Fragment>
      <Grid
        container
        justify="space-between"
        spacing={3}
        style={{ flexGrow: 1 }}
      >
        <Grid item xs={2}>
          <Grid container spacing={2}>
            <Form onSubmit={handleSubmit}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Fast Tasks</h3>
                <img
                  src={BlackLogo}
                  alt="logo"
                  width="50"
                  height="50"
                  style={{ padding: "10px" }}
                />
              </div>
              <FormGroup>
                <FormControl>
                  <TextField
                    variant="outlined"
                    error={error}
                    placeholder="Task Title"
                    name="title"
                    onChange={handleChange}
                    value={taskForm.title}
                  />
                </FormControl>
                <FormControl style={{ paddingTop: 20 }}>
                  <TextField
                    variant="outlined"
                    error={error}
                    placeholder="Task Description"
                    name="description"
                    onChange={handleChange}
                    value={taskForm.description}
                  />
                </FormControl>
                <FormControl style={{ paddingTop: 20 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    endIcon={<AddIcon />}
                  >
                    Add Task
                  </Button>
                </FormControl>
              </FormGroup>
            </Form>
          </Grid>
        </Grid>
        <Grid item xs={10} style={{ border: "solid 1px red" }}>
          {tasks.length === 0 && "No tasks yet"}
        </Grid>
      </Grid>
      <Snackbar open={error} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          The task must have title and description
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default Home;
