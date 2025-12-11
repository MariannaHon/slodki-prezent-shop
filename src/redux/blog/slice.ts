import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticles } from './operations';

export interface Blog {
    _id: string;
    title: string;
    description: string;
    text: string;
    photo: string;
    category: string;
    popular: boolean;
    date: string;
}

interface ArticleState {
    items: Blog[];
    loading: boolean;
    error: string | null;
    // page: number;
    // limit: number;
    // order: 'high' | 'low' | null;
    // view: 'grid' | 'list';
}

function handleLoading(state: ArticleState) {
    state.loading = true;
    state.error = null;
}

function handleError(state: ArticleState, action: PayloadAction<unknown>) {
    state.loading = false;
    state.error = action.payload as string | null;
}

const initialState: ArticleState = {
    items: [],
    loading: false,
    error: null,
    // page: 1,
    // limit: 10,
    // order: null,
    // view: 'list',
};

const blogSlice = createSlice({
    name: 'blog',
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
            .addCase(fetchArticles.pending, handleLoading)
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;

                if (Array.isArray(action.payload)) {
                    state.items = action.payload;
                } else {
                    state.items = [];
                    state.error = 'The received data is not an array.';
                }
            })
            .addCase(fetchArticles.rejected, handleError),
});

export const blogReducer = blogSlice.reducer;