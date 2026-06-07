import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { subscribeNewsletter } from './operations';

interface NewsletterState {
  loading: boolean;
  error: string | null;
}

const initialState: NewsletterState = {
  loading: false,
  error: null,
};

function handleLoading(state: NewsletterState) {
    state.loading = true;
    state.error = null;
}

function handleError(state: NewsletterState, action: PayloadAction<unknown>) {
    state.loading = false;
    state.error = action.payload as string | null;
}

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeNewsletter.pending, handleLoading)
      .addCase(subscribeNewsletter.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(subscribeNewsletter.rejected, handleError);
  },
});

export const newsletterReducer = newsletterSlice.reducer;