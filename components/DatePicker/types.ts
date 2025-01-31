import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

// types.ts
export interface DateCellProps {
    date: Date;
    isSelected: boolean;
    isCurrentDate: boolean;
    onSelect: (date: Date) => void;
  }
  
  export interface ScrollableDateListProps {
    dates: Date[];
    selectedDate: Date;
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    onDateSelect: (date: Date) => void;
  }
  
  export interface DatePickerHeaderProps {
    monthName: string;
  }