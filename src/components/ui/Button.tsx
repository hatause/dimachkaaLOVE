import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', fullWidth = false, children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-50 h-11 px-4 py-2";

        const variants = {
            primary: "bg-white text-zinc-950 hover:bg-zinc-200 shadow-sm",
            outline: "border border-zinc-800 bg-transparent hover:bg-zinc-800 text-zinc-100",
            ghost: "hover:bg-zinc-800 text-zinc-300 hover:text-zinc-50"
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';
