import React from "react";

import { Route, Switch } from "react-router";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
  return (
    <div className="container mx-auto">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search/:type/:query" exact>
          <Search />
        </Route>
        <Route path="/:type/:id" exact>
          <Details />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
