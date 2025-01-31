// dateFormatters.ts
export const getDayAbbreviation = (date: Date): string => {
    const days = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];
    return days[date.getDay()];
  };
  
  export const getDateNumber = (date: Date): string => {
    return date.getDate().toString();
  };
  
  export const getMonthName = (date: Date): string => {
    return date.toLocaleString('nl-NL', { month: 'long' });
  };