import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIntakesAPI } from "../../services";

export const fetchIntakes = createAsyncThunk("intakes/fetch", async () => {
  return await fetchIntakesAPI();
});
