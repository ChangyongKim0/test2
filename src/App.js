import React, { Component } from "react";
import { Route } from "react-router-dom";
import { ZIndexProvider } from "./functions/Zindexer";
import { BldgInfoDataProvider } from "./hooks/useBldgInfoData";
import { CookieDataProvider } from "./hooks/useCookieData";
import { UnitTypeProvider } from "./hooks/useUnitType";
import { ValuationCalculatorProvider } from "./hooks/useValuationCalculator";
import {
  About,
  TestPage,
  Valuation,
  ValuationComp,
  MapComp,
  Home,
} from "./pages";

class App extends Component {
  render() {
    return (
      <CookieDataProvider>
        <UnitTypeProvider>
          <BldgInfoDataProvider>
            <ValuationCalculatorProvider>
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
                <Route path="/map/comp" component={MapComp} />
              </ZIndexProvider>
            </ValuationCalculatorProvider>
          </BldgInfoDataProvider>
        </UnitTypeProvider>
      </CookieDataProvider>
    );
  }
}

export default App;
