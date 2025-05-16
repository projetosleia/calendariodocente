
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { UrgencyLevel } from './CalendarEvent';

interface UrgencyBadgeProps {
  level: UrgencyLevel;
}

const UrgencyBadge = ({ level }: UrgencyBadgeProps) => {
  const getUrgencyProps = () => {
    switch (level) {
      case 'onTime':
        return {
          variant: 'outline' as const,
          className: 'border-purple-500 bg-purple-50 text-purple-700 text-xs',
          label: 'Em tempo'
        };
      case 'medium':
        return {
          variant: 'outline' as const,
          className: 'border-pink-500 bg-pink-50 text-pink-700 text-xs',
          label: 'Atenção'
        };
      case 'urgent':
        return {
          variant: 'outline' as const,
          className: 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700 text-xs',
          label: 'Urgente'
        };
      default:
        return {
          variant: 'outline' as const,
          className: '',
          label: 'Desconhecido'
        };
    }
  };

  const { variant, className, label } = getUrgencyProps();

  return (
    <Badge variant={variant} className={className}>
      {label}
    </Badge>
  );
};

export default UrgencyBadge;
