
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

export function CreateReminderDialog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'event' | 'task' | 'news'>('event');
  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  
  const { toast } = useToast();
  
  const handleSubmit = () => {
    if (!title) {
      toast({
        title: "Título obrigatório",
        description: "Por favor, adicione um título para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Here we would typically save the event to a database or state
    toast({
      title: "Lembrete criado",
      description: `${type === 'event' ? 'Evento' : type === 'task' ? 'Tarefa' : 'Notícia'} "${title}" foi criado com sucesso.`
    });
    
    // Reset form and close dialog
    setTitle('');
    setDescription('');
    setType('event');
    setDate(new Date());
    setStartTime('');
    setEndTime('');
    setOpen(false);
    
    console.log({
      title,
      description,
      type,
      date,
      startTime,
      endTime
    });
  };
  
  const typeOptions = [
    { label: 'Evento', value: 'event' },
    { label: 'Tarefa', value: 'task' },
    { label: 'Notícia', value: 'news' }
  ];
  
  const showTimeFields = type === 'event';
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className="w-full bg-purple-700 hover:bg-purple-800 flex items-center justify-center gap-2"
        >
          <Plus className="h-4 w-4" />
          <span>Novo lembrete</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Criar Lembrete</DialogTitle>
          <DialogDescription>
            Adicione um novo evento, tarefa ou notícia à sua agenda.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Tipo</Label>
            <Select
              value={type}
              onValueChange={(value: any) => setType(value)}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tipo de Lembrete</SelectLabel>
                  {typeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Título</Label>
            <Input 
              className="col-span-3" 
              placeholder="Título do lembrete"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Descrição</Label>
            <Textarea 
              className="col-span-3" 
              placeholder="Descrição do lembrete"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Data</Label>
            <div className="col-span-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => newDate && setDate(newDate)}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          {showTimeFields && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Hora de início</Label>
                <Input 
                  className="col-span-3" 
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Hora de término</Label>
                <Input 
                  className="col-span-3" 
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </>
          )}
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={handleSubmit}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
