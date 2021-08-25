import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, About, Login, Map, Tips, NewTips, Valuation } from "./pages";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/map" component={Map} />
        <Route exact path="/tips" component={Tips} />
        <Route path="/tips/new" component={NewTips} />
        <Route path="/valuation" component={Valuation} />
      </div>
    );
  }
}

export default App;
