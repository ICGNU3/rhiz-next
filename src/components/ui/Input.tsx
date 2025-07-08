import React from 'react';
import cn from 'classnames';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helper, className, ...props }, ref) => (
    <div className="w-full">
      {label && <label className="block mb-1 font-medium text-rhiz-dark">{label}</label>}
      <input
        ref={ref}
        className={cn(
          'w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-rhiz-teal font-normal',
          error ? 'border-red-500' : 'border-rhiz-gray-300',
          className
        )}
        {...props}
      />
      {helper && !error && <div className="text-xs text-rhiz-gray-500 mt-1">{helper}</div>}
      {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
    </div>
  )
);
Input.displayName = 'Input'; 