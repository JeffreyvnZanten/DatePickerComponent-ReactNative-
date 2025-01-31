// components/DateCell.tsx
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { DateCellProps } from '../types';
import { getDayAbbreviation, getDateNumber } from '../utils/dateFormatters';

// This sub-component is used for displaying one date with its styling and text

export const DateCell = ({
  date,
  isSelected,
  isCurrentDate,
  onSelect,
}: DateCellProps) => {

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected && styles.selectedContainer,
        isCurrentDate && styles.currentDayCell 
      ]}
      onPress={() => onSelect(date)}
    >
      <Text style={styles.dayText}>{getDayAbbreviation(date)}</Text>
      <Text style={[
        styles.dateText,
        isSelected && styles.selectedText
      ]}>
        {getDateNumber(date)}
      </Text>
      {isCurrentDate && <View style={styles.currentDayDot} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  selectedContainer: {
    borderColor: '#007AFF', 
    borderWidth: 2,
  },
  dayText: {
    fontSize: 14,
    color: '#666',
  },
  dateText: {
    fontSize: 18,
    marginTop: 4,
  },
  selectedText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  currentDayCell: {
    borderColor: '#007AFF', 
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  currentDayDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#007AFF',
    marginTop: 4,
  },
});