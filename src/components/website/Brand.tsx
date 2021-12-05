import { forwardRef, HTMLProps } from 'react';

const Brand = forwardRef<HTMLSpanElement, HTMLProps<HTMLSpanElement>>((props, ref) => (
  <span ref={ref} {...props}>
    po
    <span className="text-primary">8</span>
    klasie
  </span>
));

export default Brand;
