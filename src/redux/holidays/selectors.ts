import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Holiday } from './slice';

export const selectHolidays = (state: RootState): Holiday[] => state.holidays.items;
export const selectLoading = (state: RootState): boolean => state.holidays.loading;
export const selectError = (state: RootState): string | null => state.holidays.error;


export const selectAllHolidays = createSelector(
  [selectHolidays],
  (holidays) => (Array.isArray(holidays) ? holidays : [])
);