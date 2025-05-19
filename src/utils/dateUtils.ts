
import { differenceInDays } from 'date-fns';

/**
 * Determines the urgency level based on the date proximity
 * Divided into three percentiles:
 * - First percentile (furthest from now): "onTime" (green) 
 * - Second percentile (middle range): "medium" (yellow)
 * - Third percentile (closest to now/passed): "urgent" (orange)
 */
export const determineUrgency = (startDate: Date, endDate?: Date): 'onTime' | 'medium' | 'urgent' => {
  const now = new Date();
  const targetDate = endDate || startDate;
  
  // If the date has passed, it's urgent
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
