import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    selectedProject: 0,
    projects: [],
    largeDisplayOpen: false,
  },
  reducers: {
    toggleProjectIdx(state, action) {
      state.selectedProject = action.payload;
    },
    toggleLargeDisplay(state, action) {
      state.largeDisplayOpen = action.payload;
    },
    addProjects(state, action) {
      state.projects = action.payload;
    },
  },
});

export const {
  toggleProjectIdx,
  addProjects,
  toggleLargeDisplay,
} = projectsSlice.actions;

export default projectsSlice.reducer;
