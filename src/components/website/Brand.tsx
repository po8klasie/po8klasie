import { forwardRef, HTMLProps } from 'react';

interface BrandProps extends HTMLProps<HTMLSpanElement> {
  projectName?: string;
}

const Brand = forwardRef<HTMLSpanElement, BrandProps>((props, ref) => (
  <span ref={ref} {...props} className={['font-primary', props.className ?? ''].join(' ')}>
    po
    <span className="text-primary">8</span>
    klasie
    {props.projectName && (
      <>
        &nbsp;
        <span className="font-primary uppercase text-lightGray font-normal text-base">
          {props.projectName}
        </span>
      </>
    )}
  </span>
));

export default Brand;
