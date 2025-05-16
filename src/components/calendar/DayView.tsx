
import React from 'react';
import CalendarEvent, { CalendarEventProps } from './CalendarEvent';
import { format } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';

interface DayViewProps {
  date: Date;
  events: CalendarEventProps[];
}

const timeSlots = Array.from({ length: 24 }, (_, i) => i);

const DayView = ({ date, events }: DayViewProps) => {
  const formatTimeSlot = (hour: number) => {
    return `${hour.toString().padStart(2, '0')}:00`;
  };

  const getEventsForHour = (hour: number) => {
    return events.filter(event => {
      const eventHour = event.startTime ? parseInt(event.startTime.split(':')[0]) : null;
      return eventHour === hour;
    });
  };

  return (
    <Card className="border rounded-md">
      <CardContent className="p-0">
        <div className="p-4 border-b">
          <h2 className="font-medium text-lg">
            {format(date, "EEEE, dd 'de' MMMM", { locale: require('date-fns/locale/pt-BR') })}
          </h2>
        </div>
        <ScrollArea className="h-[calc(100vh-280px)]">
          <div className="min-w-full">
            {timeSlots.map(hour => (
              <div key={hour} className="flex min-h-[80px] border-b last:border-0">
                <div className="w-16 p-2 text-xs text-gray-500 border-r flex justify-center pt-2">
                  {formatTimeSlot(hour)}
                </div>
                <div className="flex-1 p-2">
                  {getEventsForHour(hour).map(event => (
                    <CalendarEvent 
                      key={event.id}
                      {...event}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default DayView;
