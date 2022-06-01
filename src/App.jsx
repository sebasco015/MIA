import React from "react";

import LocalRouter from "./LocalRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <LocalRouter />
    </BrowserRouter>);
};

export default App;