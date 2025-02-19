import { createSlice } from "@reduxjs/toolkit";

// 1. Оголошуєм початкове значення стану Redux
const initialState = {
    items: [
  {id: 1, name: "Rosie Simpson", number: "459-12-56"},
  {id: 2, name: "Hermione Kline", number: "443-89-12"},
  {id: 3, name: "Eden Clements", number: "645-17-79"},
  {id: 4, name: "Annie Copeland", number: "227-91-26"}
],
  // filter: '',
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
},
})

export const contactsReducer= slice.reducer;
export const { deleteContact, addContact } = slice.actions;