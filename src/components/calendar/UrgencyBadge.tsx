
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
          className: 'border-green-500 bg-green-50 text-green-700',
          label: 'Em tempo'
        };
      case 'medium':
        return {
          variant: 'outline' as const,
          className: 'border-yellow-500 bg-yellow-50 text-yellow-700',
          label: 'Atenção'
        };
      case 'urgent':
        return {
          variant: 'outline' as const,
          className: 'border-orange-500 bg-orange-50 text-orange-700',
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
