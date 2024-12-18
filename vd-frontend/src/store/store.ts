import { configureStore } from '@reduxjs/toolkit';
import { opportunitiesApi } from './slices/apiSlice';
import reducer from './slices/paginationSlice';


/**
 * store: This is the configuration to combine all the reducers
 * for this application, as a main global state.
 */
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