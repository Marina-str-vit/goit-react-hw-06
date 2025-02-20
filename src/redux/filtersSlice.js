import { createSlice } from "@reduxjs/toolkit";

// 1. Оголошуєм початкове значення стану Redux
const initialState = {
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filters',
  initialState,
    reducers: {
    setFilter: (state, action) => {
      state.filters.name = action.payload;
    }
  },
})

export const filtersReducer= slice.reducer;
export const { setFilter }= slice.actions;
