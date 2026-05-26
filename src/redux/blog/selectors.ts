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

export const selectFilter = (state: RootState) =>
  state.blog.filter;

export const selectFilteredArticles = createSelector(
    [
        selectArticle,
        selectFilter,
    ],
    (articles, filter) => {

        if (filter === 'all') {
            return articles;
        }

        return articles.filter(article =>
            article.type.includes(filter)
        );
    }
);