import React, { Timeout } from "react";
import ReactDOM from "react-dom";
import { createResource, createCache } from "simple-cache-provider";

import Component from './Component';

const App = () => (
  <div>
    <Component />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
