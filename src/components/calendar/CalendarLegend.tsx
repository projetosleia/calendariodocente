
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
            className="bg-purple-100 text-purple-800 hover:bg-purple-200 data-[state=on]:bg-purple-600 data-[state=on]:text-white border-purple-300"
            aria-label="Jornada Docente"
          >
            Jornada Docente
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="jornadaDiscente" 
            className="bg-pink-100 text-pink-800 hover:bg-pink-200 data-[state=on]:bg-pink-600 data-[state=on]:text-white border-pink-300"
            aria-label="Jornada Discente"
          >
            Jornada Discente
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="institucional" 
            className="bg-violet-100 text-violet-800 hover:bg-violet-200 data-[state=on]:bg-violet-600 data-[state=on]:text-white border-violet-300"
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
