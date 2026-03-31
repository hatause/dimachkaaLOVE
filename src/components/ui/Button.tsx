'use client';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', fullWidth = false, children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-xl text-sm font-semibold tracking-wide uppercase transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-12 px-6";

    const styles: Record<string, React.CSSProperties> = {
      primary: {
        background: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
        color: '#0a1a14',
        boxShadow: '0 4px 20px rgba(52, 211, 153, 0.25)',
      },
      outline: {
        background: 'transparent',
        border: '1px solid var(--border-color)',
        color: 'var(--text-primary)',
      },
      ghost: {
        background: 'transparent',
        color: 'var(--text-secondary)',
      },
    };

    return (
      <button
        ref={ref}
        className={`${base} ${fullWidth ? 'w-full' : ''} ${className}`}
        style={styles[variant]}
        onMouseEnter={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.boxShadow = '0 6px 30px rgba(52, 211, 153, 0.4)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          } else if (variant === 'outline') {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.background = 'rgba(52, 211, 153, 0.05)';
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(52, 211, 153, 0.25)';
            e.currentTarget.style.transform = 'translateY(0)';
          } else if (variant === 'outline') {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.background = 'transparent';
          }
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
