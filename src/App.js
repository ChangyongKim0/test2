import React, { Component } from "react";
import { Route } from "react-router-dom";
import { About, TestPage, Valuation } from "./pages";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        {/* <Route path="/login" component={Login} />
        <Route path="/map" component={Map} />
        <Route exact path="/tips" component={Tips} />
        <Route path="/tips/new" component={NewTips} /> */}
        <Route path="/valuation" component={Valuation} />
        <Route path="/testpage" component={TestPage} />
      </div>
    );
  }
}

export default App;
