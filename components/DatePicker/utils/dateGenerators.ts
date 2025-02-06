// create a range of dates/ this is used at the beginning to make a selection of dates that are gonna be shown.
export function createDateRange(startDate: Date, count: number): Date[] {
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);

    return date;
  });
};
  
// This function generates the previous dates if the user is scrolling to the left
export function generatePreviousDates(firstDate: Date, count: number): Date[] {
  const startDate = new Date(firstDate);
  startDate.setDate(startDate.getDate() - count);

  return createDateRange(startDate, count);
};

// This function generates the next dates if the user is scrolling to the right
export function generateNextDates(lastDate: Date, count: number): Date[] {
  const startDate = new Date(lastDate);
  startDate.setDate(startDate.getDate() + 1);

  return createDateRange(startDate, count);
};