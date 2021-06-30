import React, { lazy, Suspense } from "react";

export const lazyLoad = (
  importFunc,
  selectorFunc,
  opts = { fallback: null }
) => {
  let lazyFactory = importFunc;

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then((module) => ({ default: selectorFunc(module) }));
  }
  const LazyComponent = lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100000));
    return lazyFactory();
  });

  return (props) => (
    <Suspense fallback={opts.fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
