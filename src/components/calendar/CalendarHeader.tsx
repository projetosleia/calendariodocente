
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevious: () => void;
  onNext: () => void;
  view: 'day' | 'week' | 'month';
  onViewChange: (view: 'day' | 'week' | 'month') => void;
}

const CalendarHeader = ({ 
  currentDate, 
  onPrevious, 
  onNext, 
  view, 
  onViewChange 
}: CalendarHeaderProps) => {
  const formatTitle = () => {
    switch (view) {
      case 'day':
        return format(currentDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
      case 'week':
        return `Semana de ${format(currentDate, "dd 'de' MMMM", { locale: ptBR })}`;
      case 'month':
        return format(currentDate, "MMMM 'de' yyyy", { locale: ptBR });
      default:
        return '';
    }
  };

  return (
    <div className="flex justify-between items-center mb-4 p-2">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold mr-4">{formatTitle()}</h2>
        <div className="flex items-center space-x-1">
          <Button variant="outline" size="icon" onClick={onPrevious}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={onNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 bg-gray-100 rounded-md p-1">
        <Button 
          variant={view === 'day' ? "default" : "ghost"} 
          size="sm"
          onClick={() => onViewChange('day')}
          className={view === 'day' ? "bg-indigo-600 text-white" : "text-gray-600"}
        >
          Dia
        </Button>
        <Button 
          variant={view === 'week' ? "default" : "ghost"} 
          size="sm"
          onClick={() => onViewChange('week')}
          className={view === 'week' ? "bg-indigo-600 text-white" : "text-gray-600"}
        >
          Semana
        </Button>
        <Button 
          variant={view === 'month' ? "default" : "ghost"} 
          size="sm"
          onClick={() => onViewChange('month')}
          className={view === 'month' ? "bg-indigo-600 text-white" : "text-gray-600"}
        >
          Mês
        </Button>
      </div>
    </div>
  );
};

export default CalendarHeader;
