'use client';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        <label className="text-[13px] font-medium tracking-wide uppercase" style={{ color: 'var(--text-secondary)' }}>
          {label}
        </label>
        <input
          ref={ref}
          className={`flex h-12 w-full rounded-xl px-4 py-2.5 text-sm transition-all duration-200 outline-none ${className}`}
          style={{
            backgroundColor: 'rgba(13, 34, 25, 0.8)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(52, 211, 153, 0.1)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';
