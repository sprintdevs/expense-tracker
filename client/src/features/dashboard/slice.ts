import { createSlice } from "@reduxjs/toolkit";

export type DashboardState = {
    something: string
}

const initialState: DashboardState = {
    something: ""
}

const slice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        getSomething(state, action) {},
        setSomething(state, action) {
            state.something = "abc";
        }
    }
})

export const {
    getSomething,
    setSomething
} = slice.actions;

export default slice.reducer;