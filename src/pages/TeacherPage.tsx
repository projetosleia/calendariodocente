
import React, { useState } from 'react';
import Header from '@/components/Header';
import CalendarHeader from '@/components/calendar/CalendarHeader';
import DayView from '@/components/calendar/DayView';
import WeekView from '@/components/calendar/WeekView';
import MonthView from '@/components/calendar/MonthView';
import CalendarLegend from '@/components/calendar/CalendarLegend';
import { CalendarEventProps } from '@/components/calendar/CalendarEvent';
import { addDays, addMonths, addWeeks, subDays, subMonths, subWeeks } from 'date-fns';

// Sample events data
const sampleEvents: CalendarEventProps[] = [
  {
    id: '1',
    title: 'Reunião de Departamento',
    type: 'event',
    urgency: 'onTime',
    startTime: '10:00',
    endTime: '11:30',
    startDate: new Date(),
    description: 'Reunião mensal do departamento'
  },
  {
    id: '2',
    title: 'Entrega de Notas',
    type: 'task',
    urgency: 'urgent',
    startDate: new Date(),
    endDate: addDays(new Date(), 2),
    description: 'Prazo final para entrega das notas do bimestre'
  },
  {
    id: '3',
    title: 'Palestra sobre Metodologias Ativas',
    type: 'news',
    urgency: 'medium',
    startDate: addDays(new Date(), 1),
    description: 'Palestra com especialista em metodologias ativas'
  },
  {
    id: '4',
    title: 'Conselho de Classe',
    type: 'event',
    urgency: 'medium',
    startTime: '14:00',
    endTime: '17:00',
    startDate: addDays(new Date(), 3),
    description: 'Conselho de classe do 2º bimestre'
  }
];

const TeacherPage = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [view, setView] = useState<'day' | 'week' | 'month'>('week');
  
  const handlePrevious = () => {
    switch (view) {
      case 'day':
        setCurrentDate(subDays(currentDate, 1));
        break;
      case 'week':
        setCurrentDate(subWeeks(currentDate, 1));
        break;
      case 'month':
        setCurrentDate(subMonths(currentDate, 1));
        break;
    }
  };
  
  const handleNext = () => {
    switch (view) {
      case 'day':
        setCurrentDate(addDays(currentDate, 1));
        break;
      case 'week':
        setCurrentDate(addWeeks(currentDate, 1));
        break;
      case 'month':
        setCurrentDate(addMonths(currentDate, 1));
        break;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header userType="teacher" userName="Professor" />
      
      <div className="container mx-auto px-4 py-6 flex-1">
        <h1 className="text-2xl font-bold mb-6">Calendário Acadêmico</h1>
        
        <div className="mb-6">
          <CalendarHeader 
            currentDate={currentDate}
            onPrevious={handlePrevious}
            onNext={handleNext}
            view={view}
            onViewChange={setView}
          />
          
          <CalendarLegend />
        </div>
        
        <div>
          {view === 'day' && (
            <DayView date={currentDate} events={sampleEvents} />
          )}
          
          {view === 'week' && (
            <WeekView date={currentDate} events={sampleEvents} />
          )}
          
          {view === 'month' && (
            <MonthView date={currentDate} events={sampleEvents} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
