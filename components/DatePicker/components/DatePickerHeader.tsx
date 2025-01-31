// components/DatePickerHeader.tsx
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { DatePickerHeaderProps } from '../types';

export const DatePickerHeader = ({
  monthName,
}: DatePickerHeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/icons/calendar.png')} 
          style={{ width: 28, height: 28 }}
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