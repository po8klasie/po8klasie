import React, { ComponentType, LazyExoticComponent, Suspense } from 'react';
import Loader from '../components/Loader';

const lazyLoaded = (Component: LazyExoticComponent<ComponentType<any>>): ComponentType => {
  return (props: any) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default lazyLoaded;
