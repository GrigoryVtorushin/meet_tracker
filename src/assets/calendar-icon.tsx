import type { SVGProps } from 'react';

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" {...props}>
          <path d="M16 3V7M8 3V7M4 10H20M5.77778 5H18.2222C19.2041 5 20 5.79594 20 6.77778V19.2222C20 20.2041 19.2041 21 18.2222 21H5.77778C4.79594 21 4 20.2041 4 19.2222V6.77778C4 5.79594 4.79594 5 5.77778 5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  );
}

CalendarIcon.displayName = 'CalendarIcon';
