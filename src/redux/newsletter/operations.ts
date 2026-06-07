import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://slodki-prezent-db.onrender.com/";

export const subscribeNewsletter = createAsyncThunk(
  'newsletter/subscribe',
  async (email: string, thunkAPI) => {
    try {
      const response = await axios.post(
        '/newsletter',
        { email }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.msg || 'Wystąpił nieoczekiwany błąd';
        return thunkAPI.rejectWithValue(message);
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue('Wystąpił nieoczekiwany błąd.');
      }
    }
  }
);