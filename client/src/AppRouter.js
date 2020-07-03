import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Films from "./containers/Films";
import AddFilm from "./containers/AddFilm";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/addFilm" component={AddFilm} />
        <Route path="/searchFilm" component={SearchFilm} />
        <Route path="/" component={Films} />
      </Switch>
    </div>
  );
};

export default AppRouter;
