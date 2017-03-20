import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Paste from "./pages/Paste";
import Kittens from "./pages/Kittens";
import Layout from "./pages/Layout";
import Info from "./pages/Info";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Kittens}></IndexRoute>
      <Route path="paste" name="paste" component={Paste}></Route>
      <Route path="info" name="info" component={Info}></Route>
    </Route>
  </Router>,
app);
