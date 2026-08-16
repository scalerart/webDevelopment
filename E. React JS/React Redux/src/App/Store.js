import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counters/CountersSlice';
import postsReducer from '../features/post/postsSlice';

const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postsReducer,
  },
});

export default store;
