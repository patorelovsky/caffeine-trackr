import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user";

type AuthState = {
    value?: User;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser: (state, {payload}: PayloadAction<User | undefined>) => {
            state.value = payload;
        }
    }
})

export const { saveUser } = authSlice.actions;

export default authSlice.reducer;