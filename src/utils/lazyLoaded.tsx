import React, { ComponentType, LazyExoticComponent, Suspense } from 'react';

const lazyLoaded = (Component: LazyExoticComponent<ComponentType<any>>) => {
  return (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default lazyLoaded;
