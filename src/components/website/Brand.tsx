import { forwardRef, HTMLProps } from 'react';

const Brand = forwardRef<HTMLSpanElement, HTMLProps<HTMLSpanElement>>((props, ref) => (
  <span ref={ref} {...props} className={['font-primary', props.className ?? ''].join(' ')}>
    po
    <span className="text-primary">8</span>
    klasie
  </span>
));

export default Brand;
