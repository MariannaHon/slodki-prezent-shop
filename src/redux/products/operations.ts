import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = "https://slodki-prezent-db.onrender.com/";

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/presents`);
            return response.data.data;
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            } else {
                return thunkAPI.rejectWithValue('An unknown error occurred.');
            }
        }
    }
);