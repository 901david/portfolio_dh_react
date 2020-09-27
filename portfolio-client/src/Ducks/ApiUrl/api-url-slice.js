import { createSlice } from '@reduxjs/toolkit';

const apiUrl = createSlice({
  name: 'apiurl',
  initialState: {
    url: '',
  },
  reducers: {
    updateUrl(state, action) {
      state.url = action.payload;
    },
  },
});

export const { updateUrl } = apiUrl.actions;

export default apiUrl.reducer;
