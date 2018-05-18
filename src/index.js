import React, { Timeout } from "react";
import ReactDOM from "react-dom";
import { createResource, createCache } from "simple-cache-provider";


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
