
import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";

interface DatePickerProps {
  selected: Date;
  onSelect: (date: Date | undefined) => void;
}

export function DatePicker({ selected, onSelect }: DatePickerProps) {
  return (
    <div className="flex flex-col gap-2">
      <Calendar
        mode="single"
        selected={selected}
        onSelect={onSelect}
        locale={ptBR}
        className="p-3 pointer-events-auto"
      />
    </div>
  );
}
