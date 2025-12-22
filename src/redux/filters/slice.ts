import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
    dlaKogo: string;
    swieta: string;
    cena: string;
}

const initialState: FiltersState = {
    dlaKogo: '',
    swieta: '',
    cena: '',
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
        }
    },
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
