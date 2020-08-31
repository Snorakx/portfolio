import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeScreen from "./pages/Home";
import Nav from "./components/nav";

class App extends Component {
  componentDidMount() {
    document.title = "Patryk Kozieł Portfolio";
  }
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
