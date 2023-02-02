import Link from 'next/link';
import { FC, ReactElement } from 'react';

// ==============================================================
type NextLinkProps = {
  href: string;
  className?: string;
  title: string | ReactElement;
  onClick?: () => void
};
// ==============================================================

const NextLink: FC<NextLinkProps> = (props) => {
  const { href, className, title, onClick } = props;

  return (
    <Link href={href} onClick={onClick}>
      <a className={className}>{title}</a>
    </Link>
  );
};

export default NextLink;
