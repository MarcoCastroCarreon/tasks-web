import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Theme from "./theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

//CSS
import "./index.css";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <Router>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact component={Home} path="/" />
          </Switch>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
