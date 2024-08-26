import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './news.thunk';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const { setPosts } = newsSlice.actions;
export const selectPosts = (state) => state.news.posts;
export const selectLoading = (state) => state.news.loading;
export const selectError = (state) => state.news.error;
export default newsSlice.reducer;
