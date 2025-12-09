import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProducts } from './operations';

export interface Product {
    _id: string;
    img: string;
    name: string;
    description: string;
    contains: string;
    price: number;
    oldPrice: number;
    photo: string;
    photo2: string;
    photo3: string;
    photo4: string;
    new: boolean;
    discount: boolean;
    bestseller: boolean;
}

interface ProductsState {
    items: Product[];
    loading: boolean;
    error: string | null;
    // page: number;
    // limit: number;
    // order: 'high' | 'low' | null;
    // view: 'grid' | 'list';
}

function handleLoading(state: ProductsState) {
    state.loading = true;
    state.error = null;
}

function handleError(state: ProductsState, action: PayloadAction<unknown>) {
    state.loading = false;
    state.error = action.payload as string | null;
}

const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
    // page: 1,
    // limit: 10,
    // order: null,
    // view: 'list',
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        // changePage(state, action: PayloadAction<number>) {
        //     state.page = action.payload;
        // },
        // changeLimit(state, action: PayloadAction<number>) {
        //     state.limit = action.payload;
        // },
        // changeSortOrder(state, action: PayloadAction<'high' | 'low' | null>) {
        //     state.order = action.payload;
        // },
        // changeViewMode(state, action: PayloadAction<'grid' | 'list'>) {
        //     state.view = action.payload;
        // },
    },
    extraReducers: builder =>
        builder
            .addCase(fetchProducts.pending, handleLoading)
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;

                if (Array.isArray(action.payload)) {
                    state.items = action.payload;
                } else {
                    state.items = [];
                    state.error = 'The received data is not an array.';
                }
            })
            .addCase(fetchProducts.rejected, handleError),
});

export const productsReducer = productsSlice.reducer;
// export const { changePage, changeLimit, changeSortOrder, changeViewMode } =
//     productsSlice.actions;