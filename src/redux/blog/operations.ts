import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = "https://slodki-prezent-db.onrender.com/";

export const fetchArticles = createAsyncThunk(
    'blog/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/blog`);
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

export const fetchArticleById = createAsyncThunk("/blog/fetchById", async (id, thunkAPI) => {
    try {
        const response = await axios.get(`/blog/${id}`);
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