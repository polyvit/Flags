import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadNeighbours = createAsyncThunk(
  "@@details/load-neighbours",
  async (countries, { extra: { client, api } }) => {
    return client.get(api.filterByCode(countries));
  }
);

export const loadCountryInfo = createAsyncThunk(
  "@@details/load-info",
  async (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  }
);

const initialState = {
  status: "idle",
  error: null,
  country: null,
  neighbours: [],
};

const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryInfo.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountryInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountryInfo.fulfilled, (state, action) => {
        state.status = "received";
        state.country = action.payload.data[0];
      })
      .addCase(loadNeighbours.fulfilled, (state, action) => {
        state.neighbours = action.payload.data.map((country) => country.name);
      });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

// Selectors
export const selectCountryInfo = (state) => state.details.country;
export const selectDetails = (state) => state.details;
export const selectNeighbours = (state) => state.details.neighbours;
