import type { SVGProps } from 'react';

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          {...props}
      >
        <path d="M16.6663 16.6667C15.4514 15.4518 12.176 12.1763 12.176 12.1763M13.6932 8.51345C13.6932 11.3743 11.374 13.6935 8.51308 13.6935C5.65221 13.6935 3.33301 11.3743 3.33301 8.51345C3.33301 5.65257 5.65221 3.33337 8.51308 3.33337C11.374 3.33337 13.6932 5.65257 13.6932 8.51345Z" />
      </svg>
  );
}

SearchIcon.displayName = 'SearchIcon';
