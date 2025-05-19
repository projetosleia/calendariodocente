
import React from 'react';
import UrgencyBadge from './UrgencyBadge';
import { Bell, FileText, Megaphone } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const CalendarLegend = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-4 p-3 bg-white rounded-md shadow-sm">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-purple-800">Tipos:</h3>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-1">
            <Bell className="h-4 w-4 text-purple-600" />
            <span className="text-sm">Eventos</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4 text-pink-600" />
            <span className="text-sm">Tarefas</span>
          </div>
          <div className="flex items-center gap-1">
            <Megaphone className="h-4 w-4 text-violet-600" />
            <span className="text-sm">Notícias</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-purple-800">Status das Tarefas:</h3>
        <div className="flex flex-wrap gap-2">
          <UrgencyBadge type="task" level="onTime" />
          <UrgencyBadge type="task" level="medium" />
          <UrgencyBadge type="task" level="urgent" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-purple-800">Categorias:</h3>
        <ToggleGroup type="multiple" className="flex flex-wrap gap-2">
          <ToggleGroupItem 
            value="jornadaDocente" 
            className="text-xs px-2 py-1 bg-purple-50 text-purple-700 hover:bg-purple-100 data-[state=on]:bg-purple-200 data-[state=on]:text-purple-900 border-purple-200 border"
            aria-label="Jornada Docente"
          >
            Jornada Docente
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="jornadaDiscente" 
            className="text-xs px-2 py-1 bg-pink-50 text-pink-700 hover:bg-pink-100 data-[state=on]:bg-pink-200 data-[state=on]:text-pink-900 border-pink-200 border"
            aria-label="Jornada Discente"
          >
            Jornada Discente
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="institucional" 
            className="text-xs px-2 py-1 bg-violet-50 text-violet-700 hover:bg-violet-100 data-[state=on]:bg-violet-200 data-[state=on]:text-violet-900 border-violet-200 border"
            aria-label="Institucional"
          >
            Institucional
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default CalendarLegend;
