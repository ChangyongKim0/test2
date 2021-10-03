import React, { Component } from "react";
import { Route } from "react-router-dom";
import { ZIndexProvider } from "./functions/Zindexer";
import { About, TestPage, Valuation, ValuationComp, Home } from "./pages";

class App extends Component {
  render() {
    return (
      <ZIndexProvider>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" component={Login} />
        <Route path="/map" component={Map} />
        <Route exact path="/tips" component={Tips} />
        <Route path="/tips/new" component={NewTips} /> */}
        <Route exact path="/valuation" component={Valuation} />
        <Route path="/valuation/comp" component={ValuationComp} />
        <Route path="/testpage" component={TestPage} />
      </ZIndexProvider>
    );
  }
}

export default App;
