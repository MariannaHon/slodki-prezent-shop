import { RootState } from '../store';


export const selectFilters = (state: RootState) => state.filters;

export const selectDlaKogoFilter = (state: RootState) => state.filters.dlaKogo;
export const selectSwietaFilter = (state: RootState) => state.filters.swieta;
export const selectCenaFilter = (state: RootState) => state.filters.cena;
