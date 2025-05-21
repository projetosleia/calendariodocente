
import React from 'react';
import { CalendarEventProps } from './CalendarEvent';
import { 
  format, 
  addMonths,
  startOfMonth,
  endOfMonth,
  eachMonthOfInterval
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import CalendarEvent from './CalendarEvent';

interface SemesterViewProps {
  date: Date;
  events: CalendarEventProps[];
}

const SemesterView = ({ date, events }: SemesterViewProps) => {
  // Get 6 months starting from the current month
  const startDate = startOfMonth(date);
  const endDate = endOfMonth(addMonths(date, 5));
  
  // Get all months in the semester
  const months = eachMonthOfInterval({
    start: startDate,
    end: endDate
  });
  
  // Group events by month
  const getEventsByMonth = (month: Date) => {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(month);
    
    return events.filter(event => {
      const eventDate = new Date(event.startDate);
      return eventDate >= monthStart && eventDate <= monthEnd;
    });
  };

  // Order events by type: tasks first, then events, then news
  const orderEventsByType = (monthEvents: CalendarEventProps[]) => {
    return [...monthEvents].sort((a, b) => {
      const typeOrder = { task: 0, event: 1, news: 2 };
      return typeOrder[a.type] - typeOrder[b.type];
    });
  };
  
  return (
    <Card className="border rounded-md shadow-sm">
      <CardHeader className="bg-purple-50 border-b py-3">
        <CardTitle className="text-lg text-purple-800 text-center">
          {`Semestre: ${format(startDate, "MMMM 'de' yyyy", { locale: ptBR })} - ${format(endDate, "MMMM 'de' yyyy", { locale: ptBR })}`}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-280px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {months.map((month, index) => {
              const monthEvents = getEventsByMonth(month);
              const orderedEvents = orderEventsByType(monthEvents);
              
              return (
                <div key={index} className="border rounded-md overflow-hidden">
                  <div className="bg-purple-50 p-2 border-b">
                    <h3 className="font-medium text-purple-800 text-center">
                      {format(month, "MMMM 'de' yyyy", { locale: ptBR })}
                    </h3>
                  </div>
                  <div className="p-2 space-y-2 max-h-80 overflow-y-auto">
                    {orderedEvents.length > 0 ? (
                      orderedEvents.map((event) => (
                        <CalendarEvent key={event.id} {...event} />
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-4">
                        Nenhum evento neste mês
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SemesterView;
