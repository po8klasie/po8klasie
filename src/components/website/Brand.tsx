import { forwardRef, HTMLProps } from 'react';

interface BrandProps extends HTMLProps<HTMLSpanElement> {
  projectName?: string;
}

const Brand = forwardRef<HTMLSpanElement, BrandProps>(({ projectName, ...props }, ref) => (
  <span ref={ref} {...props} className={['font-primary', props.className ?? ''].join(' ')}>
    po
    <span className="text-primary">8</span>
    klasie
    {projectName && (
      <>
        &nbsp;
        <span className="font-primary uppercase text-lightGray font-normal text-base">
          {projectName}
        </span>
      </>
    )}
  </span>
));

export default Brand;
