import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
    dlaKogo: string;
    swieta: string;
    cena: string;
    name: string;
}

const initialState: FiltersState = {
    dlaKogo: '',
    swieta: '',
    cena: '',
    name: '',
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<Partial<FiltersState>>) {
            Object.assign(state, action.payload);
        },
        resetFilters(state) {
            state.dlaKogo = '';
            state.swieta = '';
            state.cena = '';
            state.name = '';
        },
        search(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
    },
});

export const { setFilter, resetFilters, search } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
