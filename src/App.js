import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Nav from "./components/Nav/index";
import Home from "./components/Home/index";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects/index";
import Footer from "./components/Footer/index";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box px="25%">
        <Router>
          <Nav />
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
      </Box>
    </NativeBaseProvider>
  );
}
