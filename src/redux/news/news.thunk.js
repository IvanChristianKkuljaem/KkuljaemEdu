import { createAsyncThunk } from '@reduxjs/toolkit';
import { setPosts } from './news.slice';
import newsData from '../../utils/news.json';

export const fetchNews = createAsyncThunk('news/fetchNews', async (_, thunkAPI) => {
  try {
    const response = await fetch(newsData);
    if (!response.ok) {
      throw new Error('Failed to Fetch News Data');
    }
    const data = await response.json();
    thunkAPI.dispatch(setPosts(data));
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});
