import { combineReducers } from 'redux';
import projectsReducer from './Projects/projects.slice';

const rootReducer = combineReducers({
  projects: projectsReducer,
});

export default rootReducer;
