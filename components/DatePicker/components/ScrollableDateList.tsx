// components/ScrollableDateList.tsx
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { DateCell } from './DateCell';
import { isCurrentDate, isSelectedDate } from '../utils/dateUtils';
import { ScrollableDateListProps } from '../types';

// This sub-component is used for putting all dates in a list and 
// rendering the cells that are coming into the screen after scrolling

export const ScrollableDateList = ({
  dates,
  selectedDate,
  onDateSelect,
  onViewableItemsChanged,
  onEndReached,
  onStartReached,
}: ScrollableDateListProps) => {
  const flatListRef = React.useRef<FlatList>(null);
  
  const viewabilityConfig = React.useMemo(() => ({
    itemVisiblePercentThreshold: 50,
    minimumViewTime: 200,
  }), []);

  const renderItem = ({ item: date }: { item: Date }) => (
    <DateCell
      date={date}
      isSelected={isSelectedDate(date, selectedDate)}
      isCurrentDate={isCurrentDate(date)}
      onSelect={onDateSelect}
    />
  );

  React.useEffect(() => {
    const currentDateIndex = dates.findIndex(date => isCurrentDate(date));
    if (currentDateIndex !== -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentDateIndex,
        animated: false,
        viewPosition: 0.5
      });
    }
  }, [dates]);

  return (
    <FlatList
      style= {styles.container}
      ref={flatListRef}
      horizontal
      data={dates}
      renderItem={renderItem}
      keyExtractor={(date) => date.toISOString()}
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      onStartReached={onStartReached}
      maintainVisibleContentPosition={{
        minIndexForVisible: 0,
      }}
      getItemLayout={(data, index) => ({
        length: 70, 
        offset: 70 * index,
        index,
      })}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    marginLeft: 10, 
    marginRight: 10
  },
});