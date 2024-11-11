import type { SVGProps } from 'react';

export function CircleArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
      <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke='currentColor'
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          {...props}
      >
        <path d="M12.6601 9.17157L9.88009 12M9.88009 12L12.6601 14.8284M9.88009 12H21M18.1008 18.364C16.8637 19.6226 15.2875 20.4798 13.5716 20.8271C11.8556 21.1743 10.077 20.9961 8.46068 20.3149C6.84431 19.6337 5.46278 18.4802 4.49079 17.0001C3.5188 15.5201 3 13.78 3 12C3 10.22 3.5188 8.47991 4.49079 6.99987C5.46278 5.51983 6.84431 4.36628 8.46068 3.68509C10.077 3.0039 11.8556 2.82567 13.5716 3.17294C15.2875 3.5202 16.8637 4.37737 18.1008 5.63604"/>
      </svg>
  );
}

CircleArrowLeftIcon.displayName = 'CircleArrowRightIcon';
