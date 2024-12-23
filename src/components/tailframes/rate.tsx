import { clsxMerge } from '../../utils.ts';
import { HalfStarIcon } from '../../assets/half-star-icon.tsx';
import { StarIcon } from '../../assets/star-icon.tsx';
import { type HTMLAttributes } from 'react';

export interface RateProps extends HTMLAttributes<HTMLDivElement> {
  /** The value of the rating. */
  value: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  /** The label of the rating, displayed on the right. */
  label?: string;
  /** The number of stars to display. */
  stars?: 1 | 2 | 3 | 4 | 5;
  /** Custom label props. */
  labelProps?: HTMLAttributes<HTMLSpanElement>;
}

export function Rate({ value, className, label, stars = 5, labelProps = {}, ...rest }: RateProps) {
  const { className: labelClassName, ...labelRest } = labelProps;

  return (
    <div className={clsxMerge('flex items-center justify-center gap-0.5', className)} {...rest}>
      {[...Array(stars)].map((_, index) => (
        <div key={index} className='relative'>
          {value >= index + 1 ? (
            <StarIcon className='fill-amber-300 stroke-amber-300' />
          ) : (
            <StarIcon className='fill-slate-200 stroke-slate-200' />
          )}
          {value > index && value < index + 1 ? (
            <HalfStarIcon className='absolute left-0 top-0 fill-amber-300 stroke-amber-300' />
          ) : null}
        </div>
      ))}
      {label && (
        <span
          className={clsxMerge('ml-1.5 text-sm font-normal leading-snug text-slate-500', labelClassName)}
          {...labelRest}
        >
          {label}
        </span>
      )}
    </div>
  );
}

Rate.displayName = 'Rate';
