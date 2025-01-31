// components/DatePickerContainer.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ViewToken } from 'react-native';
import { ScrollableDateList } from './ScrollableDateList';
import { DatePickerHeader } from './DatePickerHeader';
import { generateNextDates, generatePreviousDates } from '../utils/dateGenerators';
import { getMonthName } from '../utils/dateFormatters';

const LOAD_BATCH_SIZE = 20;

// This component contains all sub-components and 
// handles most state of the DatePicker functionality

export const DatePickerContainer = () => {

  const [dates, setDates] = useState(() => {
    const today = new Date();
    const beforeDates = generatePreviousDates(today, 2);
    const afterDates = generateNextDates(today, 2);

    return [...beforeDates, today, ...afterDates];
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(getMonthName(new Date()));

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setCurrentMonth(getMonthName(date));
  };

  const onViewableItemsChanged = React.useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      const middleItem = viewableItems[Math.floor(viewableItems.length / 2)];
      setCurrentMonth(getMonthName(middleItem.item));
    }
  }, []);

  const onEndReached = () => {
    const newDates = generateNextDates(dates[dates.length - 1], LOAD_BATCH_SIZE);
    if (newDates) {
      setDates(prevDates => [...prevDates, ...newDates]);
    }
  };

  const onStartReached = () => {
    const newDates = generatePreviousDates(dates[0], LOAD_BATCH_SIZE);
    if (newDates) {
      setDates(prevDates => [...newDates, ...prevDates]);
    }
  };

  return (
    <View style={styles.container}>
      <DatePickerHeader monthName={currentMonth} />
      <ScrollableDateList
        dates={dates}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
        onViewableItemsChanged={onViewableItemsChanged}
        onEndReached={onEndReached}
        onStartReached={onStartReached}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
});