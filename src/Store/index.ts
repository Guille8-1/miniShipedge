import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
    name: "value",
    initialState: {
        value: "Initial value",
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
        resetStatus: (state) => {
            state.value = 'idle';
        }
    },
});

export const { setValue, resetStatus } = valueSlice.actions;
export const valueReducer = valueSlice.reducer;