import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state
interface PaginationState {
  itemsPerPage: number;
  pageNumber: number,
}

const initialState: PaginationState = {
  itemsPerPage: 5,
  pageNumber: 1,
};

// Create the slice
const paginationSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload
    }
  },
});

export const { setItemsPerPage, setPage } = paginationSlice.actions;

export default paginationSlice.reducer;