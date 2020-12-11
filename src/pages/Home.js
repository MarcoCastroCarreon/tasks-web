import React, { Fragment } from "react";
import moment from 'moment';
import {
  Grid,
  TextField,
  FormGroup,
  FormControl,
  Button,
  Snackbar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// own dependencies
import { Form } from "../index.styles";
import Alert from "../components/Alert";
import BlackLogo from "../img/black-thunder.png";
import "../index.css";

const Home = () => {
  const [taskForm, setTaskForm] = React.useState({
    id: Math.ceil(Math.random() * 10000),
    title: "",
    description: "",
    createdAt: moment().format('YYYY-MM-DD')
  });

  const [error, setError] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);
  const [anchorElement, setAnchorElement] = React.useState(null);
  const [listIndex, setIndex] = React.useState(null);

  const handleChange = (event) => {
    setError(false);
    const { name, value } = event.target;
    setTaskForm({ ...taskForm, [name]: value });
  };

  const handleMenu = (event, index) => {
    setIndex(index);
    setAnchorElement(event.currentTarget);
  };

  const handleDelete = (task) => {
    tasks.splice(listIndex, 1);
    setTasks([...tasks]);
  };

  const handleMenuClose = () => {
    setAnchorElement(null);
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
      return;
    }
    setTasks([...tasks, taskForm]);
    setTaskForm({
      id: Math.ceil(Math.random() * 10000),
      title: "",
      description: "",
      createdAt: moment().format('YYYY-MM-DD')
    });
  };

  return (
    <Fragment>
      <Grid container spacing={2} style={{ flexGrow: 1 }}>
        <Grid item xs={0}>
          <Grid container spacing={2} style={{ marginLeft: '5%' }}>
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
        <Grid
          item
          md={8}
          style={{
            border: "solid 1px gray",
            marginTop: 30,
            marginLeft: '7%',
            borderRadius: 10,
            boxShadow: "5px 5px 5px rgba(68, 68, 68, 0.6)",
          }}
          justify="center"
        >
          {tasks.length > 0 ? (
            <Grid container spacing={2} justify="center">
              {tasks.map((task, index) => {
                return (
                  <Grid item md={4} key={task.id} justify="center">
                    <Menu
                      open={Boolean(anchorElement)}
                      anchorEl={anchorElement}
                      onClose={handleMenuClose}
                    >
                      <MenuItem
                        onClick={() => {
                          handleDelete(task);
                          handleMenuClose();
                        }}
                      >
                        Delete
                      </MenuItem>
                    </Menu>
                    <Card
                      style={{
                        maxWidth: 370,
                        boxShadow: "5px 5px 5px rgba(68, 68, 68, 0.6)",
                      }}
                      className="card-hover"
                    >
                      <CardHeader
                        action={
                          <IconButton onClick={(e) => handleMenu(e, index)}>
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={task.title}
                        subheader={task.createdAt}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {task.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Typography variant="h3" style={{ marginLeft: '40%' }} >No tasks yet...</Typography>
          )}
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
