import React from "react";

import NavBar from "./components/Nav/index";
import Home from "./components/Home/index";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects/index";
import Footer from "./components/Footer/index";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blog">
          <Blogs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
