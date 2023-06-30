import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setContactFilter: (state, action) => action.payload,
  },
});

export const filterReducer = filterSlice.reducer;
export const { setContactFilter } = filterSlice.actions;
