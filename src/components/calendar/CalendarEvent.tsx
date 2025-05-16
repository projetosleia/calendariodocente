
import React from 'react';
import { cn } from '@/lib/utils';

export type EventType = 'event' | 'task' | 'news';
export type UrgencyLevel = 'onTime' | 'medium' | 'urgent';

export interface CalendarEventProps {
  id: string;
  title: string;
  type: EventType;
  urgency?: UrgencyLevel;
  startTime?: string;
  endTime?: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
}

const CalendarEvent = ({
  title,
  type,
  urgency = 'onTime',
  startTime,
  endTime
}: CalendarEventProps) => {
  const getEventStyles = () => {
    const baseStyles = "p-2 rounded-md text-sm mb-1 border-l-4";
    
    // Type-specific styles
    const typeStyles = {
      event: "bg-indigo-50 border-l-indigo-400",
      task: "bg-purple-50 border-l-purple-400",
      news: "bg-blue-50 border-l-blue-400"
    };
    
    // Urgency-specific styles
    const urgencyStyles = {
      onTime: "border-green-500",
      medium: "border-yellow-500",
      urgent: "border-orange-500"
    };
    
    return cn(baseStyles, typeStyles[type], urgencyStyles[urgency]);
  };

  const getIcon = () => {
    switch (type) {
      case 'event':
        return "📅 ";
      case 'task':
        return "✓ ";
      case 'news':
        return "📢 ";
      default:
        return "";
    }
  };

  const getTimeString = () => {
    if (startTime && endTime) {
      return `${startTime} - ${endTime}`;
    } else if (startTime) {
      return startTime;
    }
    return '';
  };

  return (
    <div className={getEventStyles()}>
      <div className="flex justify-between items-start">
        <span className="font-medium">{getIcon()}{title}</span>
        {(startTime || endTime) && (
          <span className="text-xs text-gray-500">{getTimeString()}</span>
        )}
      </div>
    </div>
  );
};

export default CalendarEvent;
