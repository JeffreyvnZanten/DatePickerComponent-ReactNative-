import { ViewToken } from "react-native";

// Props for the DateCell sub-component
export type DateCellProps = {
  date: Date;
  isSelected: boolean;
  isCurrentDate: boolean;
  onSelect: (date: Date) => void;
}
  
// Props for the DatePickerHeader sub-component
export type DatePickerHeaderProps = {
  monthName: string;
}

// Props for the ScrollableDateList sub-component
export type ScrollableDateListProps = {
  dates: Date[];
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  onViewableItemsChanged: ({ viewableItems }: { viewableItems: ViewToken[] }) => void;
  onEndReached: () => void;
  onStartReached: () => void;
}