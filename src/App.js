import "./App.css";
import * as React from "react";
import Container from "@mui/material/Container";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

// xs, extra-small: 0px.
// sm, small: 600px.
// md, medium: 960px.
// lg, large: 1280px.
// xl, extra-large: 1920px.

function App() {
  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs style={{ backgroundColor: "red" }}>
            <Header />

            <Router>
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </Router>

            <Footer />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
