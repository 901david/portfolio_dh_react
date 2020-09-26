import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    selectedProject: 0,
    projects: [],
  },
  reducers: {
    toggleProjectIdx(state, action) {
      state.selectedProject = action.payload;
    },
  },
});

export const { toggleProjectIdx } = projectsSlice.actions;

export default projectsSlice.reducer;
