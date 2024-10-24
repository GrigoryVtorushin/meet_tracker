import type { SVGProps } from 'react';

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
      <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke-width="1.5"

          {...props}

      >
          <path d="M7.5 6.66667V5C7.5 3.61929 8.61925 2.5 10 2.5C11.3807 2.5 12.5 3.61929 12.5 5V6.66667" />
          <path d="M3.3335 9.16667C3.3335 8.24617 4.07969 7.5 5.00016 7.5H15.0002C15.9207 7.5 16.6668 8.24617 16.6668 9.16667V14.1667C16.6668 16.0076 15.1744 17.5 13.3335 17.5H6.66683C4.82588 17.5 3.3335 16.0076 3.3335 14.1667V9.16667Z"/>
          <path d="M10.8335 13.1104C11.3317 12.8222 11.6668 12.2836 11.6668 11.6667C11.6668 10.7462 10.9206 10 10.0002 10C9.07969 10 8.3335 10.7462 8.3335 11.6667C8.3335 12.2836 8.66866 12.8222 9.16683 13.1104V14.1667C9.16683 14.6269 9.53993 15 10.0002 15C10.4604 15 10.8335 14.6269 10.8335 14.1667V13.1104Z" />
      </svg>

  );
}

LockIcon.displayName = 'LockIcon';
