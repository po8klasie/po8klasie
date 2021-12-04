import { FC } from 'react';
import { IconType } from 'react-icons';

export const roundedLinkClassName =
  'flex items-center px-5 py-3 border-4 border-primary rounded-3xl text-primary hover:bg-primary hover:text-white transition';

const RoundedExternalLink: FC<{ href: string; icon: IconType }> = ({
  href,
  icon: Icon,
  children,
}) => (
  <a href={href} target="_blank" rel="noreferrer noopener" className={roundedLinkClassName}>
    <span className="text-lg" style={{ transform: 'translateY(-1px)' }}>
      <Icon />
    </span>
    <span className="ml-4 font-bold">{children}</span>
  </a>
);

export default RoundedExternalLink;
