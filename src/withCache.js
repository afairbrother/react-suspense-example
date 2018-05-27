import React from "react";

import { SimpleCache } from "simple-cache-provider";

// pass in a component, use the cache with the component you passed in
export function withCache(Component) {
  return props => {
    <SimpleCache.Consumer>
      {cache => <Component cache={cache} {...props} />}
    </SimpleCache.Consumer>;
  };
}
