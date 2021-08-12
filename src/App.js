import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, About, Login } from "./pages";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
