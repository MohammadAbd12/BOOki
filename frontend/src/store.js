import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice'; // Assuming this is your existing api slice
import { bookApiSlice } from './slices/bookApiSlice'; // Import your bookApiSlice

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [bookApiSlice.reducerPath]: bookApiSlice.reducer, // Add bookApiSlice reducer
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, bookApiSlice.middleware), // Add bookApiSlice middleware
  devTools: true,
});

export default store;
