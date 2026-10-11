import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'green' | 'forest' | 'mint' | 'amber' | 'charcoal';
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'forest',
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} mb-10 sm:mb-14 ${className}`}>
      {badge && (
        <div className="mb-3.5">
          <Badge variant={badgeVariant} dot size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#172B26] tracking-tight leading-[1.18]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#4A6B61] leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
