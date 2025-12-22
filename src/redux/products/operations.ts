import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = "https://slodki-prezent-db.onrender.com/";

interface FetchProductsParams {
    page?: number;
    perPage?: number;
    dlaKogo?: string;
    swieta?: string;
    cena?: string;
}

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async (params: FetchProductsParams = {}, thunkAPI) => {
        try {
            const response = await axios.get(`/presents`, {params});
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

export const fetchProductById = createAsyncThunk("/product/fetchById", async (id, thunkAPI) => {
    try {
        const response = await axios.get(`/presents/${id}`);
        return response.data.data;
    } catch (e) {
      let errorMessage = "Something went wrong :( Try to reload your page.";

      if (e instanceof Error) {
        errorMessage = e.message;
      }

      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);