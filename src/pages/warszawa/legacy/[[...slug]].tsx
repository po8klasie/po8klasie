// import NextIndexWrapper from '../index'

// next/dynamic is used to prevent breaking incompatibilities
// with SSR from window.SOME_VAR usage, if this is not used
// next/dynamic can be removed to take advantage of SSR/prerendering
import dynamic from 'next/dynamic';
import { FC } from 'react';

const NextIndexWrapper = dynamic(() => import('../../../index'), { ssr: false });

const Page: FC = (props) => <NextIndexWrapper {...props} />;

export default Page;
