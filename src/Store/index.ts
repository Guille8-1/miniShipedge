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
    },
});

export const { setValue } = valueSlice.actions;
export const valueReducer = valueSlice.reducer;