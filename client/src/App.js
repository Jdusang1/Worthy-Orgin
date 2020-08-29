import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import FarmersMarkets from "./pages/FarmersMarkets";
import Facts from "./pages/Facts";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MarketsTable from "./components/MarketsTable";

function App() {
  return (
    <Router>
      <div>


        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>

          <Route exact path="/farmers-markets">
            <FarmersMarkets />
          </Route>

          <Route exact path="/facts">
            <Facts />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <MarketsTable />
      <Footer />
    </Router>
  );
}

export default App;
