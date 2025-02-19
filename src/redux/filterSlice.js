import { createSlice } from "@reduxjs/toolkit";

// 1. Оголошуєм початкове значення стану Redux
// const initialState = {
//   filter: '',
// };

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      state = action.payload;
    }
  },
})


export const filterReducer= slice.reducer;
export const { setFilter }= slice.actions;
