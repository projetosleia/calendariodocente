
import React from 'react';
import UrgencyBadge from './UrgencyBadge';

const CalendarLegend = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Tipos:</h3>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-indigo-400 rounded-full"></span>
            <span className="text-sm">Eventos</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
            <span className="text-sm">Tarefas</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
            <span className="text-sm">Notícias</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Urgência:</h3>
        <div className="flex flex-wrap gap-2">
          <UrgencyBadge level="onTime" />
          <UrgencyBadge level="medium" />
          <UrgencyBadge level="urgent" />
        </div>
      </div>
    </div>
  );
};

export default CalendarLegend;
