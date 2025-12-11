import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchHolidays } from './operations';

export interface Holiday {
    _id: string;
    name: string;
    description: string;
    photo: string;
}

interface HolidaysState {
    items: Holiday[];
    loading: boolean;
    error: string | null;
    // page: number;
    // limit: number;
    // order: 'high' | 'low' | null;
    // view: 'grid' | 'list';
}

function handleLoading(state: HolidaysState) {
    state.loading = true;
    state.error = null;
}

function handleError(state: HolidaysState, action: PayloadAction<unknown>) {
    state.loading = false;
    state.error = action.payload as string | null;
}

const initialState: HolidaysState = {
    items: [],
    loading: false,
    error: null,
    // page: 1,
    // limit: 10,
    // order: null,
    // view: 'list',
};

const holidaysSlice = createSlice({
    name: 'holidays',
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
            .addCase(fetchHolidays.pending, handleLoading)
            .addCase(fetchHolidays.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;

                if (Array.isArray(action.payload)) {
                    state.items = action.payload;
                } else {
                    state.items = [];
                    state.error = 'The received data is not an array.';
                }
            })
            .addCase(fetchHolidays.rejected, handleError),
});

export const holidaysReducer = holidaysSlice.reducer;
// export const { changePage, changeLimit, changeSortOrder, changeViewMode } =
//     productsSlice.actions;
