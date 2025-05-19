
import { differenceInDays } from 'date-fns';

export type EventCategory = 'jornadaDocente' | 'jornadaDiscente' | 'institucional';
export type TaskUrgency = 'onTime' | 'medium' | 'urgent';

/**
 * Determines the urgency level for tasks based on date proximity
 * - If the end date has passed: "urgent" (orange)
 * - If the end date is within 2 days: "urgent" (orange)
 * - If the end date is within 7 days: "medium" (yellow)
 * - Otherwise: "onTime" (green)
 */
export const determineTaskUrgency = (startDate: Date, endDate?: Date): TaskUrgency => {
  const now = new Date();
  const targetDate = endDate || startDate;
  
  // If the target date has passed, it's urgent
  if (targetDate < now) {
    return 'urgent';
  }
  
  // Calculate days remaining
  const daysRemaining = differenceInDays(targetDate, now);
  
  // Define thresholds: within 2 days is urgent, within 7 days is medium, beyond that is on time
  if (daysRemaining <= 2) {
    return 'urgent';
  } else if (daysRemaining <= 7) {
    return 'medium';
  } else {
    return 'onTime';
  }
};

/**
 * Determines the status level for events based on date proximity
 * - If the event is today or has passed: "urgent" (orange)
 * - If the event is within 1 day: "urgent" (orange)
 * - If the event is within 2 days: "medium" (yellow)
 * - Otherwise: "onTime" (green)
 */
export const determineEventStatus = (eventDate: Date): TaskUrgency => {
  const now = new Date();
  
  // If the event date has passed or is today, it's urgent (orange)
  if (eventDate <= now) {
    return 'urgent';
  }
  
  // Calculate days remaining
  const daysRemaining = differenceInDays(eventDate, now);
  
  // Define thresholds
  if (daysRemaining <= 1) { // 1 day before
    return 'urgent';
  } else if (daysRemaining <= 2) { // 2 days before
    return 'medium';
  } else { // more than 2 days before
    return 'onTime';
  }
};

/**
 * Determines if a news item is valid based on its validity date
 * - If the validity date hasn't passed: "onTime" (green)
 * - Otherwise: "urgent" (expired - orange)
 */
export const determineNewsValidity = (validUntil: Date): TaskUrgency => {
  const now = new Date();
  
  // If the news is still valid
  if (validUntil >= now) {
    return 'onTime';
  }
  
  // If the news has expired
  return 'urgent';
};
