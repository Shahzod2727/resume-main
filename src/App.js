import "./App.css";
import * as React from "react";
import Container from "@mui/material/Container";
// import Particles from "react-particles-js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";

// xs, extra-small: 0px.
// sm, small: 600px.
// md, medium: 960px.
// lg, large: 1280px.
// xl, extra-large: 1920px.

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>

        <Grid item xs className="display-flex">
          <Router>
            <Header />

            <div className="main-content   container_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
