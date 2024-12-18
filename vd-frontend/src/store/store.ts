// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { opportunitiesApi } from './slices/apiSlice';
import reducer from './slices/paginationSlice';

export const store = configureStore({
  reducer: {
    [opportunitiesApi.reducerPath]: opportunitiesApi.reducer,
    paginationReducer: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(opportunitiesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;