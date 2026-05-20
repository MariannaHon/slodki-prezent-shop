



import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from './slice';

import { selectNameFilter} from '../filters/selectors';

export const selectProducts = (state: RootState): Product[] => state.products.items;
export const selectLoading = (state: RootState): boolean => state.products.loading;
export const selectError = (state: RootState): string | null => state.products.error;


export const selectAllProducts = createSelector(
  [selectProducts],
  (products) => (Array.isArray(products) ? products : [])
);


export const selectFilteredProducts = createSelector(
    [
        selectNameFilter,
        selectProducts,
    ],
    function (
        nameFilter,
        products,
    ) {
        if (!Array.isArray(products)) {
            return [];
        }

        let result: Product[] = products;

        if (nameFilter) {
            result = filterName(result, nameFilter);
        }

        return result;
    }
);

function filterName(products: Product[], name: string): Product[] {
    return products.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase())
    );
}