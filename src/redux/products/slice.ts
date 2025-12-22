import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProducts } from './operations';

export interface Product {
    _id: string;
    img: string;
    name: string;
    description: string;
    contains: string[];
    price: number;
    oldPrice: number;
    photo: string;
    photo2: string;
    photo3: string;
    photo4: string;
    new: boolean;
    discount: boolean;
    bestseller: boolean;
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
    dlaKogo: string[];
    swieta: string[];
}

interface ProductsState {
    items: Product[];
    loading: boolean;
    error: string | null;
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
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
    page: 1,
    perPage: 6,
    totalPages: 0,
    totalItems: 0,
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        changePage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        changeLimit(state, action: PayloadAction<number>) {
            state.perPage = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(fetchProducts.pending, handleLoading)
            .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;

            const payload = action.payload; 
            if (payload && Array.isArray(payload.data)) {
                if (state.page === 1) {
                    state.items = payload.data;
                } else {
                    state.items = [...state.items, ...payload.data];
                }
                state.page = payload.page;
                state.perPage = payload.perPage; 
                state.totalPages = payload.totalPages;
                state.totalItems = payload.totalItems;
            } else {
                state.items = [];
                state.error = 'The received data is not valid.';
            }
        })
            .addCase(fetchProducts.rejected, handleError),
});

export const productsReducer = productsSlice.reducer;
export const { changePage, changeLimit } = productsSlice.actions;

