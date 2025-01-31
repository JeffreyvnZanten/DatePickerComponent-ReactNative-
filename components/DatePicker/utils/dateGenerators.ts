// dateGenerators.ts
export const createDateRange = (startDate: Date, count: number): Date[] => {
    return Array.from({ length: count }, (_, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      return date;
    });
  };
  
  export const generatePreviousDates = (firstDate: Date, count: number): Date[] => {
    const startDate = new Date(firstDate);
    startDate.setDate(startDate.getDate() - count);
    return createDateRange(startDate, count);
  };
  
  export const generateNextDates = (lastDate: Date, count: number): Date[] => {
    const startDate = new Date(lastDate);
    startDate.setDate(startDate.getDate() + 1);
    return createDateRange(startDate, count);
  };