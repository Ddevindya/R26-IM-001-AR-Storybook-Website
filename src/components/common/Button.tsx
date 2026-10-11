import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'nature';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconRight,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary:
      'bg-[#166534] hover:bg-[#14532D] text-white shadow-md shadow-[#166534]/15 focus:ring-[#166534]/30',
    nature:
      'bg-[#22A06B] hover:bg-[#1B8357] text-white shadow-md shadow-[#22A06B]/20 focus:ring-[#22A06B]/30',
    secondary:
      'bg-[#DCFCE7] hover:bg-[#BBF7D0] text-[#166534] border border-emerald-200/80 focus:ring-[#22A06B]/20 font-semibold',
    outline:
      'bg-white/90 hover:bg-white text-[#172B26] border border-slate-200 hover:border-emerald-300 shadow-2xs hover:shadow-xs focus:ring-[#166534]/20',
    ghost:
      'text-[#172B26] hover:bg-emerald-50 hover:text-[#166534] focus:ring-emerald-200',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-xs sm:text-sm px-4 py-2.5 gap-2',
    lg: 'text-sm sm:text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </button>
  );
};
