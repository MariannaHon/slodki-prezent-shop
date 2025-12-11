import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Blog } from './slice';

export const selectArticle = (state: RootState): Blog[] => state.blog.items;
export const selectLoading = (state: RootState): boolean => state.blog.loading;
export const selectError = (state: RootState): string | null => state.blog.error;


export const selectAllProducts = createSelector(
  [selectArticle],
  (products) => (Array.isArray(products) ? products : [])
);