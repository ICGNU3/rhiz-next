import React from 'react';
import cn from 'classnames';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const base = 'inline-flex items-center justify-center font-mont-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-rhiz-teal disabled:opacity-50';
const variants = {
  primary: 'bg-rhiz-teal text-white hover:bg-rhiz-gold',
  secondary: 'bg-rhiz-purple text-white hover:bg-rhiz-gold',
  outline: 'border border-rhiz-teal text-rhiz-teal bg-white hover:bg-rhiz-teal hover:text-white',
  ghost: 'bg-transparent text-rhiz-dark hover:bg-rhiz-gray-100',
};
const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2 text-base',
  lg: 'px-7 py-3 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, children, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <span className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span> : null}
      {children}
    </button>
  )
);
Button.displayName = 'Button'; 