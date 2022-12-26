import { createSlice } from '@reduxjs/toolkit';

interface IState {
  number: number;
}

const initialState: IState = {
  number: 1,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    plusNumber: (state, action) => {
      state.number = action.payload + 1;
    },
  },
});

export const { plusNumber } = dataSlice.actions;

export default dataSlice.reducer;
