
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { EventType, UrgencyLevel } from '../calendar/CalendarEvent';

const EventForm = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [eventType, setEventType] = useState<EventType>('event');
  const [urgencyLevel, setUrgencyLevel] = useState<UrgencyLevel>('onTime');

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Criar Novo Item</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input id="title" placeholder="Título do item" />
          </div>
          
          <div>
            <Label htmlFor="type">Tipo</Label>
            <Select value={eventType} onValueChange={(val) => setEventType(val as EventType)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="event">Evento</SelectItem>
                <SelectItem value="task">Tarefa</SelectItem>
                <SelectItem value="news">Notícia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="description">Descrição</Label>
          <Textarea id="description" placeholder="Descrição do item" rows={3} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label>Data Inicial</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? (
                    format(startDate, "dd/MM/yyyy", { locale: ptBR })
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label>Data Final {eventType === 'event' || eventType === 'task' ? '(opcional)' : ''}</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    eventType === 'news' && "opacity-50 cursor-not-allowed"
                  )}
                  disabled={eventType === 'news'}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? (
                    format(endDate, "dd/MM/yyyy", { locale: ptBR })
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  disabled={(date) => (startDate ? date < startDate : false)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label htmlFor="urgency">Urgência</Label>
            <Select value={urgencyLevel} onValueChange={(val) => setUrgencyLevel(val as UrgencyLevel)}>
              <SelectTrigger>
                <SelectValue placeholder="Nível de urgência" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="onTime">Em tempo</SelectItem>
                <SelectItem value="medium">Média</SelectItem>
                <SelectItem value="urgent">Urgente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="mb-2 block">Canais de Notificação</Label>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="flex items-center gap-1">
              <span className="w-4 text-center">✓</span> E-mail
            </Button>
            <Button variant="outline" className="flex items-center gap-1">
              <span className="w-4 text-center">✓</span> WhatsApp
            </Button>
            <Button variant="outline" className="flex items-center gap-1">
              <span className="w-4 text-center">✓</span> Notificação no App
            </Button>
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline">Cancelar</Button>
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
