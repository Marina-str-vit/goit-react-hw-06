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
      state.name = action.payload;
    }
  },
})

export const filterReducer= slice.reducer;
export const { setFilter }= slice.actions;
