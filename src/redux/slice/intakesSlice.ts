import { createSlice } from "@reduxjs/toolkit";
import { CaffeineIntake } from "../../types/caffeineIntake";
import { fetchIntakes } from "../thunks/fetchIntakes";

const initialState = {
  isLoading: true,
  data: [] as CaffeineIntake[] | undefined,
  error: undefined as Error | undefined,
};

const intakesSlice = createSlice({
  name: "intakes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchIntakes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchIntakes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchIntakes.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = {
        message: error.message as string,
        name: error.name as string,
        stack: error.stack,
      };
    });
  },
});

export default intakesSlice.reducer;
