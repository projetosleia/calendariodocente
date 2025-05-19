import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Check, Bell, FileText, Megaphone } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import UrgencyBadge from './UrgencyBadge';
import { determineUrgency } from '@/utils/dateUtils';

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
  link?: string;
  isCompleted?: boolean;
}

const CalendarEvent = ({
  id,
  title,
  type,
  urgency: providedUrgency,
  startTime,
  endTime,
  startDate,
  endDate,
  description,
  link,
  isCompleted: initialIsCompleted = false
}: CalendarEventProps) => {
  const [isCompleted, setIsCompleted] = useState(initialIsCompleted);
  
  // Calculate urgency automatically if not manually provided
  const urgency = providedUrgency || determineUrgency(startDate, endDate);

  const getEventStyles = () => {
    const baseStyles = "p-2 rounded-md text-sm mb-1 border-l-4";
    
    // Type-specific styles
    const typeStyles = {
      event: "bg-purple-50 border-l-purple-500",
      task: "bg-pink-50 border-l-pink-500",
      news: "bg-violet-50 border-l-violet-500"
    };
    
    // Urgency-specific styles
    const urgencyStyles = {
      onTime: "border-green-500",
      medium: "border-yellow-500",
      urgent: "border-orange-500"
    };

    // Completed style
    const completedStyle = isCompleted ? "opacity-60" : "";
    
    return cn(baseStyles, typeStyles[type], urgencyStyles[urgency], completedStyle);
  };

  const getIcon = () => {
    switch (type) {
      case 'event':
        return <Bell className="h-4 w-4 text-purple-600" />;
      case 'task':
        return <FileText className="h-4 w-4 text-pink-600" />;
      case 'news':
        return <Megaphone className="h-4 w-4 text-violet-600" />;
      default:
        return null;
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

  const handleCheckboxChange = (checked: boolean) => {
    setIsCompleted(checked);
    // Aqui poderíamos chamar uma API para atualizar o status do item
    console.log(`Item ${id} marcado como ${checked ? 'concluído' : 'pendente'}`);
  };

  return (
    <div className={getEventStyles()}>
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-2">
          {type === 'task' && (
            <Checkbox
              id={`check-${id}`}
              checked={isCompleted}
              onCheckedChange={handleCheckboxChange}
              className="mt-0.5"
            />
          )}
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              {getIcon()}
              <span className={cn("font-medium", isCompleted && "line-through")}>{title}</span>
            </div>
            {description && (
              <p className="text-xs text-gray-600 mt-1">{description}</p>
            )}
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-purple-700 hover:text-purple-900 flex items-center gap-1 mt-1"
              >
                <ExternalLink className="h-3 w-3" /> Ver detalhes
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          {(startTime || endTime) && (
            <span className="text-xs text-gray-500">{getTimeString()}</span>
          )}
          <UrgencyBadge level={urgency} />
        </div>
      </div>
    </div>
  );
};

export default CalendarEvent;
