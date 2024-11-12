import type { SVGProps } from 'react';

export function BurgerIcon(props: SVGProps<SVGSVGElement>) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32" height="32"
          viewBox="0 0 32 32"
          fill="none"
          stroke="white"
          {...props}
      >
        <path d="M5.33301 8H26.6663M5.33301 16H26.6663M5.33301 24H26.6663" />
      </svg>
  );
}

BurgerIcon.displayName = 'CloseIcon';
