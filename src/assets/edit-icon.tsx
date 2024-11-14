import type { SVGProps } from 'react';

export function EditIcon(props: SVGProps<SVGSVGElement>) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32" height="32"
          viewBox="0 0 32 32"
          fill="none"
          stroke="white"

          {...props}
      >
          <path d="M19.333 8.00016L23.9997 12.6668M21.1955 6.27214C21.7966 5.67114 22.6117 5.3335 23.4617 5.3335C24.3115 5.3335 25.1267 5.67114 25.7277 6.27214C26.3287 6.87314 26.6663 7.68827 26.6663 8.53822C26.6663 9.38816 26.3287 10.2033 25.7277 10.8043L11.3759 25.1562L5.33301 26.6668L6.84373 20.6239L21.1955 6.27214Z" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>
  );
}

EditIcon.displayName = 'EditIcon';
