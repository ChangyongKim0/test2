import React, { Component } from "react";
import { Route } from "react-router-dom";
import { ZIndexProvider } from "./functions/Zindexer";
import { About, TestPage, Valuation } from "./pages";

class App extends Component {
  render() {
    return (
      <ZIndexProvider>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        {/* <Route path="/login" component={Login} />
        <Route path="/map" component={Map} />
        <Route exact path="/tips" component={Tips} />
        <Route path="/tips/new" component={NewTips} /> */}
        <Route path="/valuation" component={Valuation} />
        <Route path="/testpage" component={TestPage} />
      </ZIndexProvider>
    );
  }
}

export default App;
