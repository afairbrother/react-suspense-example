import React, { Timeout } from "react";
import ReactDOM from "react-dom";
import { createResource, createCache } from "simple-cache-provider";

import { withCache } from "./withCache";

import Component from "./Component";
import Loading from "./loading";

// resource
const getData = createResource(
  // return a promise, resolve it in 500ms
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 500);
    })
);

// Component with a cache
const DataComponent = withCache(props => {
  // get the data from the resource, read with the cache
  // give the data to the component
  const data = getData.read(props.cache);
  return <Component data={data} />;
});

// Create a loading placeholder.... maybe call this placeholder
const Loader = props => {
  return (
    <Timeout ms={1000}>
      {didTimeout => {
        return didTimeout ? <Loading /> : props.children;
      }}
    </Timeout>
  );
};

// TODO: Use the created components below
const App = () => (
  <div>
    <Component />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
