import type { SVGProps } from 'react';

export function ClubsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='white'
      strokeWidth='1.5'
      {...props}
    >
      <path
        d='M3 14.2572C3 16.3865 4.73074 18.1037 6.8714 18.1037C8.01005 18.1037 9.26256 17.7488 9.77495 16.6727H9.86604C9.92297 17.8404 8.5566 18.8249 8.10114 19.3172C7.44072 20.0269 7.85064 21 8.69323 21H14.3068C15.1494 21 15.5593 20.0269 14.8989 19.3172C14.4434 18.8249 13.077 17.8404 13.134 16.6727H13.2251C13.7374 17.7488 14.9786 18.1037 16.1286 18.1037C18.2579 18.1037 20 16.3865 20 14.2572C20 12.0707 18.3831 10.2162 16.2197 10.2162C15.3771 10.2162 14.5345 10.4909 13.8741 11.0175C14.9672 10.136 15.3885 8.99125 15.3885 7.9037C15.3885 5.74007 13.6463 4 11.4943 4C9.35365 4 7.61152 5.74007 7.61152 7.9037C7.61152 8.99125 8.03282 10.136 9.11453 11.0175C8.45412 10.4909 7.62291 10.2162 6.78031 10.2162C4.61688 10.2162 3 12.0707 3 14.2572Z'
        strokeLinejoin='round'
      />
    </svg>
  );
}

ClubsIcon.displayName = 'ClubsIcon';