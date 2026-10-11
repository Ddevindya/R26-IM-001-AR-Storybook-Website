import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'forest' | 'mint' | 'amber' | 'charcoal' | 'gray' | 'purple' | 'blue' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'forest',
  size = 'md',
  className = '',
  dot = false,
}) => {
  // Centralized Green & Neutral Variants (remapping legacy purple/blue/navy to clean green tokens)
  const variantStyles = {
    forest: 'bg-emerald-50 text-[#166534] border-emerald-200/80',
    green: 'bg-[#DCFCE7] text-[#14532D] border-emerald-300/60',
    mint: 'bg-[#F0FDF4] text-[#166534] border-emerald-200/60',
    amber: 'bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]',
    charcoal: 'bg-[#172B26] text-white border-transparent',
    gray: 'bg-slate-100 text-slate-700 border-slate-200',
    // Fallback mappings to maintain backward compatibility without purple:
    purple: 'bg-emerald-50 text-[#166534] border-emerald-200/80',
    blue: 'bg-[#DCFCE7] text-[#166534] border-emerald-200/60',
    navy: 'bg-[#172B26] text-white border-transparent',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-xs px-3 py-1 font-semibold tracking-wide',
    lg: 'text-sm px-4 py-1.5 font-semibold',
  };

  const dotColors = {
    forest: 'bg-[#166534]',
    green: 'bg-[#22A06B]',
    mint: 'bg-[#22A06B]',
    amber: 'bg-[#D97706]',
    charcoal: 'bg-emerald-400',
    gray: 'bg-slate-400',
    purple: 'bg-[#166534]',
    blue: 'bg-[#22A06B]',
    navy: 'bg-emerald-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border shadow-2xs transition-all ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${dotColors[variant]} animate-pulse`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
