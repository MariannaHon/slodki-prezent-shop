



import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from './slice';

export const selectProducts = (state: RootState): Product[] => state.products.items;
export const selectLoading = (state: RootState): boolean => state.products.loading;
export const selectError = (state: RootState): string | null => state.products.error;


export const selectAllProducts = createSelector(
  [selectProducts],
  (products) => (Array.isArray(products) ? products : [])
);
