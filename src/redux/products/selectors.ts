
// import { createSelector } from '@reduxjs/toolkit';
// import { RootState } from '../store';
// import { Product } from './slice';

// export const selectProducts = createSelector(
//     [
//         selectProducts,
//         // selectBrandFilter,
//         // selectCategoriesFilter,
//         // selectDiscountFilter,
//         // selectPriceFilter,
//         // selectRatingFilter,
//         // selectNameFilter,
//     ],
//     function (
//         products,
//         // brandFilter,
//         // categoriesFilter,
//         // discountFilter,
//         // priceFilter,
//         // ratingFilter,
//         // nameFilter
//     ) {
//         if (!Array.isArray(products)) {
//             return [];
//         }

//         let result: Product[] = products;

//         // if (nameFilter) {
//         //     result = filterName(result, nameFilter);
//         // }

//         // if (brandFilter && brandFilter.length > 0) {
//         //     result = filterBrand(result, brandFilter);
//         // }
//         // if (categoriesFilter && categoriesFilter.length > 0) {
//         //     result = filterCategories(result, categoriesFilter);
//         // }
//         // if (discountFilter && discountFilter.length > 0) {
//         //     result = filterDiscount(result, discountFilter);
//         // }
//         // if (priceFilter && priceFilter.length > 0) {
//         //     result = filterPrice(result, priceFilter);
//         // }
//         // if (ratingFilter && ratingFilter.length > 0) {
//         //     result = filterRating(result, ratingFilter);
//         // }
//         return result;
//     }
// );

// export const selectError = (state: RootState) => state.products.error;
// export const selectLoading = (state: RootState) => state.products.loading;
// export const selectProducts = (state: RootState) => state.products.items;



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
