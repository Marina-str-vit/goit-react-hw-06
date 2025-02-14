import { configureStore } from '@reduxjs/toolkit';

// 1. Оголошуєм початкове значення стану Redux
const initialState = {
  tasks: {
    items: [
  {id: 1, name: "Rosie Simpson", number: "459-12-56"},
  {id: 2, name: "Hermione Kline", number: "443-89-12"},
  {id: 3, name: "Eden Clements", number: "645-17-79"},
  {id: 4, name: "Annie Copeland", number: "227-91-26"}
],
},
filters: {
  status: 'all',
},
};

// 2. Передаємо початкове значення стану Redux
const rootReducer = (state = initialState, action) => {
return state;
};

export const store = configureStore({
reducer: rootReducer,
});