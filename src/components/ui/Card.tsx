import React from 'react';
import cn from 'classnames';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const paddings = {
  none: '',
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-10',
};

export function Card({ children, className, padding = 'md', onClick }: CardProps) {
  return (
    <div className={cn('bg-white rounded-xl shadow-md', paddings[padding], className)} onClick={onClick}>
      {children}
    </div>
  );
} 