// Get the abbreviation of the date for displaying in the date cell
export function getDayAbbreviation(date: Date): string {
  const days = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];
  return days[date.getDay()];
};
  
// Get the daynumber to display in the date cell
export function getDateNumber(date: Date): string {
  return date.getDate().toString();
};
  
// Get the monthname to display in the header
export function getMonthName(date: Date): string {
  return date.toLocaleString('nl-NL', { month: 'long' });
};