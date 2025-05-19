
import { differenceInDays } from 'date-fns';

/**
 * Determines the urgency level based on the date proximity
 * For tasks with both start and end dates:
 * - If the end date has passed: "urgent" (orange)
 * - If the end date is within 2 days: "urgent" (orange)
 * - If the end date is within 7 days: "medium" (yellow)
 * - Otherwise: "onTime" (green)
 * 
 * For events with only a start date:
 * - If the date has passed: "urgent" (orange)
 * - If the date is within 2 days: "urgent" (orange)
 * - If the date is within 7 days: "medium" (yellow)
 * - Otherwise: "onTime" (green)
 */
export const determineUrgency = (startDate: Date, endDate?: Date): 'onTime' | 'medium' | 'urgent' => {
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
