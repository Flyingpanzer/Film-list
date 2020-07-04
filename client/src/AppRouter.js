import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Films from "./containers/Films";
import AddFilm from "./containers/AddFilm";
import AddFile from "./containers/AddFile";
import SearchFilm from "./containers/SearchFilm";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/addFilm" component={AddFilm} />
        <Route path="/addFile" component={AddFile} />
        <Route path="/searchFilm" component={SearchFilm} />
        <Route path="/" component={Films} />
      </Switch>
    </div>
  );
};

export default AppRouter;
