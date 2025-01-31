// components/DatePickerHeader.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { DatePickerHeaderProps } from '../types';

const openCalendar = () => {

}

// This sub-component is the header of the DatePicker component. 
// It shows the name of the month of most cells on the selection and shows an calendar icon.
// Pressing it opens the calendar for more precise datepicking

export const DatePickerHeader = ({
  monthName,
}: DatePickerHeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openCalendar}>
        <Image
          source={require('../../../assets/icons/calendar-color.png')} 
          style={{ width: 46, height: 46 }}
        />
      </TouchableOpacity>
      <Text style={styles.monthText}>{monthName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
  },
});