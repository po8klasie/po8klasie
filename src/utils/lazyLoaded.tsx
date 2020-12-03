import React, { ComponentType, LazyExoticComponent, Suspense } from 'react';
import Loader from '../components/Loader';

const lazyLoaded = (Component: LazyExoticComponent<ComponentType<any>>) => {
  return (props: any) => (
    <Suspense fallback={<Loader />}>
      {/* eslint-disable-next-line */}
      <Component {...props} />
    </Suspense>
  );
};

export default lazyLoaded;
