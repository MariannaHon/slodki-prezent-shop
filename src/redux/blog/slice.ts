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
    type: string[];
}

interface ArticleState {
    items: Blog[];
    loading: boolean;
    error: string | null;
    filter: string;
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
    filter: "all",
};

const blogSlice = createSlice({
    name: 'blog',
    initialState: initialState,
    reducers: {
        changeFilter(state, action: PayloadAction<string>) {
        state.filter = action.payload;
    },
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
export const { changeFilter } = blogSlice.actions;