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
    addProjects(state, action) {
      state.projects = action.payload;
    },
  },
});

export const { toggleProjectIdx, addProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
