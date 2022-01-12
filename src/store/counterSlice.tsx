import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
  increaseByAmount: number;
  displayCounter: boolean;
}

const DEFAULT_STATE: CounterState = {
  counter: 0,
  increaseByAmount: 0,
  displayCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: DEFAULT_STATE,
  reducers: {
    increaseBy: (state: CounterState, action: PayloadAction<number>) => {
      state.counter = state.counter + action.payload;
    },
    changeAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.increaseByAmount = action.payload;
    },
    toggleDisplay: (state: CounterState) => {
      state.displayCounter = !state.displayCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
