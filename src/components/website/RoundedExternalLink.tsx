import { forwardRef, HTMLProps } from 'react';

import { IconType } from 'react-icons';

export const roundedLinkClassName =
  'flex items-center px-5 py-3 border-4 border-primary rounded-3xl text-primary hover:bg-primary hover:text-white transition';

const RoundedExternalLink = forwardRef<
  HTMLAnchorElement,
  { icon: IconType } & HTMLProps<HTMLAnchorElement>
>(({ href, className, icon: Icon, children }, ref) => (
  <a
    href={href}
    ref={ref}
    target="_blank"
    rel="noreferrer noopener"
    className={[className ?? '', roundedLinkClassName].join(' ')}
  >
    <span className="text-lg" style={{ transform: 'translateY(-1px)' }}>
      <Icon />
    </span>
    <span className="ml-4 font-bold">{children}</span>
  </a>
));

export default RoundedExternalLink;
