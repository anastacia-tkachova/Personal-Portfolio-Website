import { FC, SVGProps } from 'react';
import css from './Icon.module.css';

export type IconName =
  | 'mobileMenu'
  | 'closeBtn'
  | 'terminalCircle'
  | 'listStar'
  | 'git'
  | 'linked'
  | 'day'
  | 'night'
  | 'langArrow'
  | 'linkArrow'
  | 'college';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  width?: number;
  height?: number;
  className?: string;
}

export const Icon: FC<IconProps> = ({
  name,
  width = 24,
  height = 24,
  className = '',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    className={`${css.icon} ${className}`}
    aria-hidden="true"
    {...props}
  >
    <use href={`/sprite.svg#icon-${name}`} />
  </svg>
);
