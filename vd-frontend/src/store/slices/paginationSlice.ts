import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/**
 * PaginationState is responsible for providing
 * itemsPerPage - number of items per page
 * pageNumber - current page number
 * 
 * This slice reducer is for the components to consume.
 */
interface PaginationState {
  itemsPerPage: number
  pageNumber: number,
}

const initialState: PaginationState = {
  itemsPerPage: 5,
  pageNumber: 1,
}

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
})

export const { setItemsPerPage, setPage } = paginationSlice.actions

export default paginationSlice.reducer